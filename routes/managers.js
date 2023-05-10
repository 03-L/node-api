const express = require('express')
const router = express.Router()
const db = require("../db");

router.get("/employees", async (req, res) => { // Get all employees
    const {rows} = await db.query("SELECT * FROM employees");
    res.status(200).send(rows);
});

router.get("/employees/:id", async (req, res) => { // Get an employee
    const {rows} = await db.query("SELECT * FROM employees WHERE id = $1", [req.params.id]);
    res.status(200).send(rows);
});

router.post("/employees", (req, res) => {
    res.send("Add new employee");
});

router.patch("/employees/:id", (req, res) => {
    res.send("Edit employee");
});

router.delete("/employees/:id", async (req, res) => { // Delete an employee
    await db.query("DELETE FROM employees WHERE id = $1", [req.params.id]);
    res.status(200).send();
});

module.exports = router;