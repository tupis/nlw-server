import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    return res.send('salve')
});

app.listen(port, () => console.log('server iniciado'));
