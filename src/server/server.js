import bodyParser from 'body-parser';
import express from 'express';
import accountRoutes from './src/routes/account.js';
import groupRoutes from "./src/routes/groups.js";
import messageRouter from "./src/routes/messages.js";

const app = express();
app.use(bodyParser.json());
const port = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});

app.use('/api', accountRoutes);
app.use('/api', groupRoutes);
app.use('/api', messageRouter);