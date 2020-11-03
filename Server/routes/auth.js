const express = require('express')
//from express we'll use the router
const router = express.Router()
 
router.get('/',(req,res)=>{
    res.send('Hiiiii Boooo')
})
router.post('/signup',(req,res)=>{
     const {name,password,email} = req.body
     if(!email || !password || !name)
       return res.status(422).json({error:"Enter all the fields specified"})

        res.json({message:"successfully posted"})
})
module.exports = router