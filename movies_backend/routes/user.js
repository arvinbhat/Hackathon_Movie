const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const pool = require('../db/db');
const result = require('../utils/result');
const config = require('../utils/config')
const router = express.Router();

router.post('/register',async(req,res)=>{
    const {firstName, lastName, email, password, phoneNumber} =req.body
    const sql =`INSERT INTO USERS(firstName,lastName,email,password,phoneNumber) values(?,?,?,?,?)`
    try {
        const hash =await bcrypt.hash(password,config.saltRound)
        pool.query(sql,[firstName,lastName,email,hash,phoneNumber],(error,data)=>{
        res.send(result.createResult(error,data))
    })
    } catch (error) {
        res.send(result.createResult(error))
        console.log(error)
    }
})

router.post('/login',(req,res)=>{
    const{email,password} = req.body
    const sql = `SELECT * FROM users WHERE email = ?`
    pool.query(sql,[email,password],async (error,data)=>{
        if(data != ''){
            console.log(data)
            const dbUser = data[0]
            const validUser = await bcrypt.compare(password,dbUser.password)
                if(validUser){
                    const payload = {uid : dbUser.user_id}
                    const token = jwt.sign(payload,config.secret)
                    const user = {token: token, firstName:dbUser.firstName, lastName:dbUser.lastName}
                    res.send(result.createResult(error,user))
                }else{
                    res.send('Invalid Password..!')
                }
        }else{
            res.send('Invalid Email...!')
        }
    })

})

router.put('/profile',async (req,res)=>{
    const{firstName, lastName, phoneNumber} = req.body
    const sql = `UPDATE users SET firstName =?, lastName = ?, phoneNumber = ?, password =?`
    const hash =await bcrypt.hash(password,config.saltRound)
    pool.query(sql,[firstName,lastName,phoneNumber,hash],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})
router.put('/forgotPassword',async (req,res)=>{
    const{email,password} = req.body
    const sql1 = `SELECT * FROM users WHERE email = ?`
    pool.query(sql1,[email],async(error,data)=>{
        if(data != ''){
            const dbUser = data[0]
            if(email === dbUser.email){
                const sql = `UPDATE users SET password =?`
                try {
                    const hash =await bcrypt.hash(password,config.saltRound)
                pool.query(sql,[hash],(error,data)=>{
                    res.send(result.createResult(error,data))
                })
                } catch (error) {
                    res.send(result.createResult(error,data))
                }
            }else{
                req.send("Invalid Email...!")
            }
        }
    })
    
})

module.exports = router;
