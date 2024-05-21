import bodyParser from 'body-parser';
import express from 'express';
import accountRoutes from './src/routes/account.js'

const app = express();
app.use(bodyParser.json());
const port = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port);
});

app.use('/api', accountRoutes)
