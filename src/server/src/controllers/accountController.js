import { MongoClient, ObjectId } from "mongodb";
import { errorResponse, uri } from "../constants/index.js";

async function CreatUser(body) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("talkie");
    const users = database.collection("users");

    const doc = { ...body };
    const result = await users.insertOne(doc);
    console.log(`user created with ID: ${result.insertedId}`);
    return result.insertedId;
  } finally {
    await client.close();
  }
}

async function VerifyUser(body) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("talkie");
    const users = database.collection("users");

    const query = { email: body.email };
    const account = await users.findOne(query);
    console.log(account);
    if (account == null) {
      return errorResponse.emailNotFound;
    } else if (body.password != account.password) {
      return errorResponse.passwordIncorrect;
    } else {
      return true;
    }
  } finally {
    await client.close();
  }
}

async function GetUser(body) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("talkie");
    const users = database.collection("users");

    const query = { _id: ObjectId.createFromHexString(body.userId) };
    const account = await users.findOne(query);
    if (account === null) {
      return errorResponse.userNotFound;
    }
    return account;
  } finally {
    await client.close();
  }
}

async function GetUserInfo(body) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("talkie");
    const users = database.collection("users");

    const query = { _id: ObjectId.createFromHexString(body.userId) };
    const account = await users.findOne(query);
    if (account === null) {
      return errorResponse.userNotFound;
    }
    return {name : account.name, _id : account._id};
  } finally {
    await client.close();
  }
}

export { CreatUser, VerifyUser, GetUser, GetUserInfo };
