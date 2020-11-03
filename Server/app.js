const express =require('express')
const mongoose =require('mongoose')
const PORT=5000
const app= express ()
const {MongoUri} = require('./keys')
//pass: nNr3IXm9EP1eCV7I
// const customMiddleware = (req,res,next) =>{

//     console.log("middle ware executed")
//     next()
// }

// app.use(customMiddleware) 

// app.get('/',(req,res)=>{ 
//     res.send("hello world")
// })
require('./models/user')
//User is the name of model

//middleware to convert the data from server to json first because first parse then write
app.use(express.json())

app.use(require('./routes/auth'))

mongoose.connect(MongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
mongoose.connection.on('connected',()=>{
    console.log('connected to mongo');
})
mongoose.connection.on('error',(err)=>{
    console.log('Sorry theres an error: ',err);
})
app.listen(PORT,()=> console.log("server is listening on",PORT))