import { createServer } from "http";
import { Server } from "socket.io";
import { MongoClient, ObjectId } from "mongodb";
import { uri } from "../constants/index.js";

async function InitializeWS(body) {
  const client = new MongoClient(uri);
  const database = client.db("talkie");
  const messages = database.collection("messages");

  const httpServer = createServer();
  const io = new Server(httpServer);
  io.on("connection", (socket) => {
    console.log("Connection established");

    const pipeline = [{$match: {'fullDocument.groupId': body.groupId}}]
    const changestream = messages.watch(pipeline);
    changestream.on("change", (changeEvent) => {
        socket.emit("new_messages", changeEvent.fullDocument);
    })
    

    socket.on("create_message", (arg) => {
        PostNewMessage(arg);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected");
      changestream.close();
    });
  });
  httpServer.listen(8080);
}

export { InitializeWS };

async function PostNewMessage(data) {
    const client = new MongoClient(uri);
    try {
        const database = client.db("talkie");
        const messages = database.collection("messages");
        
        const doc = {...data};
        const result = await messages.insertOne(doc);
        console.log(`message posted with ID: ${result.insertedId}`);
      } finally {
        await client.close();
      }
}
