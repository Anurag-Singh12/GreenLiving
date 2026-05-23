const express = require('express');
const cors = require('cors');
const connectionDB = require('./Database/dbConfig')

const port = process.env.PORT || 5001;
const app = express();
const dotenv = require('dotenv');

dotenv.config();
connectionDB();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))

app.use("/tips", require('./Routes/Tips.route.js'));
app.use("/resources", require('./Routes/Resource.route.js'))
app.use("/users", require('./Routes/User.route.js'));
app.use("/carbonFootprint", require('./Routes/CarbonFootprint.route.js'))

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`)
})