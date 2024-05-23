import { MongoClient } from "mongodb";
import { errorResponse, uri } from "../constants/index.js";

async function CreatUser(body) {
    const client = new MongoClient(uri);
  try {
    const database = client.db("talkie");
    const users = database.collection("users");
    
    const doc = {...body};
    const result = await users.insertOne(doc);
    console.log(`user created with ID: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}

async function VerifyUser(body) {
    const client = new MongoClient(uri);
    try {
        const database = client.db("talkie");
        const users = database.collection("users");

        const query = {email : body.email}
        const account = await users.findOne(query);
        console.log(account)
        if (account == null) {
            return errorResponse.emailNotFound;
           } else if (body.password != account.password){
            return errorResponse.passwordIncorrect
           } else {
            return true
        }
    } finally {
        await client.close();
      }
}

export {CreatUser, VerifyUser}