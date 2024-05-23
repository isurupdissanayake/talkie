import { CreatUser, VerifyUser } from '../controllers/accountController.js';
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

router.get("/user/getUser", async (req,res) => {
    try {
       const account = await VerifyUser(req.body);
       res.send(account);
    } catch (error) {
        res.send(error);
    }
});

export default router;

