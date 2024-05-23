import { CreatUser, VerifyUser } from '../controllers/accountController.js';
import express, { response } from 'express';
import { InitializeWS } from '../controllers/messagesController.js';

const router = express.Router();

router.get("/messages/getbyid", async (req, res) => {
    try {
        InitializeWS(req.body);
        res.send(messages);
    } catch (error) {
        res.send(error);
    }
});

export default router;