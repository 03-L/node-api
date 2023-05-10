const express = require('express')
const router = express.Router()
const db = require("../db");

router.get("/:id", async (req, res) => { // Get employee
    const {rows} = await db.query("SELECT * FROM employees WHERE id = $1", [req.params.id]);
    res.status(200).send(rows);
});

router.patch("/:id", (req, res) => {
    res.send("Edit employee");
});

module.exports = router;