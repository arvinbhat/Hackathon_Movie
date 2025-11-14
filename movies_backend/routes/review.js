const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../db/db');
const result = require('../utils/result');
const config = require('../utils/config')
const router = express.Router();

router.post('/',(req,res)=>{
    const {user_id, movie_id,review, rating} =  req.body
    const sql = `INSERT INTO reviews(user_id,movie_id, review,rating) VALUES(?,?,?,?)`
    pool.query(sql,[user_id, movie_id,review,rating],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

module.exports = router