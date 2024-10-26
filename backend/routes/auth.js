const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const jwtScret = "hello iam mohan"
const trial="hello mohan"

router.post('/signup',(req,res)=>{
    const{ username , email , password , role} = req.body
    const hashedPassword = 
})

module.exports = router