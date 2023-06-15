import express from "express";
import bodyParser from "body-parser";
import apiRouter from "./src/routers/api.router";

const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});