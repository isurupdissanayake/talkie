import { CreatUser, VerifyUser } from '../controllers/accountController.js';
import express, { response } from 'express';
import { CreateGroup, GetAllGroups, GetGroupById, GetMembers, JoinGroup } from '../controllers/groupController.js';

const router = express.Router();

router.post("/groups/create", async (req,res) => {
    try {
        await CreateGroup(req.body);
        res.send("group created");
    } catch (error) {
        res.send(error);
    }
});

router.get("/groups/getbyid", async (req, res) => {
    try {
        const group = await GetGroupById(req.body);
        console.log(group);
        res.send(group);
    } catch (error) {
        res.send(error);
    }
});

router.get("/groups/getall", async (req, res) => {
    try {
        const groups = await GetAllGroups(req.body);
        console.log(groups);
        res.send(groups);
    } catch (error) {
        res.send(error);
    }
})

router.post("/groups/join", async (req, res) => {
    try {
        await JoinGroup(req.body);
        res.send("Joined group");
    } catch (error) {
        res.send(error);
    }
})

router.get("/groups/getmembers", async (req, res) => {
    try {
        const groups = await GetMembers(req.body);
        console.log(groups);
        res.send(groups);
    } catch (error) {
        res.send(error);
    }
})

export default router;