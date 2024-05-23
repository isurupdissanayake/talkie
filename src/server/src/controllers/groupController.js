import { MongoClient, ObjectId } from "mongodb";
import { uri } from "../constants/index.js";

async function CreateGroup(body) {
    const client = new MongoClient(uri)
    try {
        const database = client.db("talkie");
        const groups= database.collection("groups");

        const doc = {...body};
        const result = await groups.insertOne(doc);
        console.log(`group created with ID: ${result.insertedId}`)

    } finally {
        await client.close();
    }
}

async function GetGroupById(body) {
    const client = new MongoClient(uri);
    try {
        const database = client.db("talkie");
        const groups = database.collection("groups");
        const query = {_id: ObjectId.createFromHexString(body.groupId)};
        const result = await groups.findOne(query)
        return result;
    } finally {
        await client.close();
    }
}

async function GetAllGroups(body) {
    const client = new MongoClient(uri);
    var result = []
    try {
        const database = client.db("talkie");
        const groups = database.collection("groups");
        const cursor = groups.find()
        await cursor.forEach(doc => {
            result.push(doc);
        })
    } finally {
        await client.close();
    }
    return result;
}

async function JoinGroup (body) {
    const client = new MongoClient(uri);
    try {
        const database = client.db("talkie");
        const members = database.collection("members");

        const doc = {...body};
        const result = await members.insertOne(doc);
        console.log(`member created ID: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}

async function GetMembers (body) {
    const client = new MongoClient(uri);
    var result = []
    try {
        const database = client.db("talkie");
        const groups = database.collection("members");
        const query = {groupId: body.groupId};
        const cursor = groups.find(query)
        await cursor.forEach(doc => {
            result.push(doc.userId);
        })
    } finally {
        await client.close();
    }
    return result;
}

export {CreateGroup, GetGroupById, GetAllGroups, JoinGroup, GetMembers};