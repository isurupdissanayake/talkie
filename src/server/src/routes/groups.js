import { CreatUser, VerifyUser } from '../controllers/accountController.js';
import express, { response } from 'express';
import { CreateGroup, GetAllGroups, GetGroupById } from '../controllers/groupController.js';

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
        const groups = await GetAllGroups(req);
        console.log(groups);
        res.send(groups);
    } catch (error) {
        res.send(error);
    }
})

export default router;