const express = require('express')
//from express we'll use the router
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")

router.get('/',(req,res)=>{
    res.send('Hiiiii Boooo')
})
router.post('/signup',(req,res)=>{
     const {name,password,email} = req.body
     if(!email || !password || !name)
       return res.status(422).json({error:"Enter all the fields specified"})

        //res.json({message:"successfully posted"})
        User.findOne({ email :  email })
        .then((savedUser)=>{ 
          if(savedUser)
            return res.status(422).json({error:"User already exists with that email"})
            const user = new User({
              email,
              password,
              name
            })


        //else 
        user.save()
        .then (user=>{
          res.json({message:"saved successfully"})
        })
        .catch(err=> {console.log(err)})            
        })

     .catch(err=>{ console.log(err)})   
})
module.exports = router