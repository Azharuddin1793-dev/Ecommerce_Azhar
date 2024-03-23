const express = require("express");
const app = express();
require("dotenv").config();
// const port = 3005;

app.get("/", (req, res) => {
    res.send("Welcome to azhar api's");
});
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});