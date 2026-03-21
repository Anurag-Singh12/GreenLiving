const express = require('express');
const cors = require('cors');
const connectionDB = require('./Config/dbConfig')

const port = process.env.PORT || 5000;
const app = express();
const dotenv = require('dotenv');

dotenv.config();
// connectionDB();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})