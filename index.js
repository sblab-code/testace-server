const express = require("express");
const app = express;
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "testace is connected"
    })
});


app.listen(PORT, ()=>{
    console.log("Backend is connected");
})
