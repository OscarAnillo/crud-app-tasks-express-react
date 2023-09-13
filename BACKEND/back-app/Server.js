const express  = require('express');
const mongoose = require("mongoose");
require("dotenv").config()
const cors = require("cors");
const taskRoute = require("./Routes/Task-route")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use("/api/tasks", taskRoute)

mongoose.connect(process.env.MONGO_URI).then((res) => {
    console.log(`DB Connected`)
}).catch( console.log )

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`))