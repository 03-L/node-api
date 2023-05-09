require('dotenv').config();
const express = require("express");
const managers = require('./routes/managers');

const app = express();

app.use(express.json());
app.use('/managers', managers);

app.get("/", (req, res) => {
    res.send("Hello.");
});

app.listen(process.env.PORT || 3000, () => console.log(`App listening on port ${process.env.PORT || 3000}.`));