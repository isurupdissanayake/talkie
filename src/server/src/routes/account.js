import { CreatUser, GetUser, GetUserInfo, VerifyUser } from '../controllers/accountController.js';
import express, { response } from 'express';

const router = express.Router();

router.post("/user/create", async (req,res) => {
    try {
        await CreatUser(req.body);
        res.send("user created");
    } catch (error) {
        res.send(error);
    }
});

router.get("/user/verifyuser", async (req,res) => {
    try {
       const account = await VerifyUser(req.body);
       res.send(account);
    } catch (error) {
        res.send(error);
    }
});

router.get("/user/getuser", async (req,res) => {
    try {
       const account = await GetUser(req.body);
       res.send(account);
    } catch (error) {
        res.send(error);
    }
});

router.get("/user/getuserinfo", async (req,res) => {
    try {
       const account = await GetUserInfo(req.body);
       res.send(account);
    } catch (error) {
        res.send(error);
    }
});

export default router;

