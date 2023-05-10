const express = require('express')
const router = express.Router()
const db = require("../db");

router.get("/employees", (req, res) => {
    res.send("Get all employees");
});

router.post("/employees", (req, res) => {
    res.send("Add new employee");
});

router.patch("/employees/:id", (req, res) => {
    res.send("Edit employee");
});

router.delete("/employees/:id", (req, res) => {
    res.send("Delete employee");
});

module.exports = router;