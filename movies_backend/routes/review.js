const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../db/db');
const result = require('../utils/result');
const config = require('../utils/config')
const router = express.Router();

router.post('/add',(req,res)=>{
    const {user_id, movie_id,review, rating} =  req.body
    const sql = `INSERT INTO reviews(user_id,movie_id, review,rating) VALUES(?,?,?,?)`
    pool.query(sql,[user_id, movie_id,review,rating],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})

router.put('/edit',(req,res)=>{
    const {user_id,movie_id, review ,rating}=req.body
    const sql = `UPDATE reviews SET review = ?, rating =? WHERE movie_id = ? AND user_id = ?`
    pool.query(sql,[review,rating,movie_id,user_id],(error,data)=>{
        if (error) {
            console.error(error);
            return res.send(result.createResult(error, null));
        }
        if (data.affectedRows === 0) {
            return res.send(result.createResult('Review not found or user unauthorized', null));
        }
        res.send(result.createResult(error,data))
    })
})

router.get('/rev', (req, res) => {
    const sql = `SELECT * FROM reviews`;
    pool.query(sql, (error, data) => {
        if (error) {
            console.error("Database error:", error);
            return res.send(result.createResult('Failed to retrieve reviews', null));
        }
        res.send(result.createResult(null, data));
    });
});


router.get('/user', (req, res) => {
    const {user_id} = req.body;

    const sql = `SELECT * FROM reviews WHERE user_id = ?`;

    pool.query(sql, [user_id], (error, data) => {
        if (error) {
            console.error("Database error:", error);
            return res.send(result.createResult('Failed to retrieve user reviews', null));
        }
        res.send(result.createResult(null, data));
    });
});



router.delete('/delete', (req, res) => {
    const { review_id, user_id } = req.body; 

    const sql = `DELETE FROM reviews WHERE review_id = ? AND user_id = ?`;

    pool.query(sql, [review_id, user_id], (error, data) => {
        if (error) {
            console.error("Database error:", error);
            return res.send(result.createResult('Failed to delete review', null));
        }

        if (data.affectedRows === 0) {
            return res.send(result.createResult('Unauthorized or review not found', null));
        }
        res.send(result.createResult(null, { message: 'Review deleted successfully', deletedId: review_id }));
    });
});






module.exports = router