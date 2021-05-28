import express from "express";
import bodyParser from "body-parser";
import bmi from './api/routes/bmi';

const app = express();

app.use(bodyParser.json());

app.use('/bmi', bmi);

app.listen(8080, () => {
    console.log("Application is running on Port 8080\n");
});

