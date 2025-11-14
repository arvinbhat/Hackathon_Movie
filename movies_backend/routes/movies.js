const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../db/db');
const result = require('../utils/result');
const config = require('../utils/config')
const router = express.Router();


router.get('/', (req, res) => {
    const sql = `SELECT * FROM movies`;
    pool.query(sql, (error, data) => {
        if (error) {
            console.error("Database error:", error);
            return res.send(result.createResult('Failed to retrieve Movies', null));
        }
        res.send(result.createResult(null, data));
    });
});

module.exports = router