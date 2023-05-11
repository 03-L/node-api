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

router.post("/employees", async (req, res) => { // Add new employee
    const {rows} = await db.query("INSERT INTO employees(first_name, last_name) VALUES($1, $2) RETURNING id, first_name, last_name", [req.body.first_name, req.body.last_name]);
    res.status(201).send(rows);
});

router.patch("/employees/:id", (req, res) => {
    res.send("Edit employee");
});

router.delete("/employees/:id", async (req, res) => { // Delete an employee
    await db.query("DELETE FROM employees WHERE id = $1", [req.params.id]);
    res.status(200).send();
});

module.exports = router;