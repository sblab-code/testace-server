const express = require("express");
const app = express();

const cors = require("cors");
const database = require("./config/database");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/auth");


require("dotenv").config();
const PORT = process.env.PORT || 4000;

database.connectDB();

app.use(cors());
app.use(express.json());


app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "testace is connected"
    })
});


app.listen(PORT, () => {
    console.log("Backend is connected");
})
