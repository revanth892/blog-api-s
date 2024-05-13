const express = require('express');
const PORT =7070
const router =require('./routes/routes.js');
const { default: mongoose } = require('mongoose');
const mongowebsite="mongodb+srv://asrevanthnaidu:MOr7x0h4LfOSUE3B@cluster0.vgknlpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



const app =express();

app.use(express.json())
app.use('/',router)

app.listen(PORT,()=>
{
    console.log("Server is running")
})


mongoose.connect(mongowebsite)
.then(()=>{
    console.log("the database is connected");
})
.catch(err=>{
    console.log(err);
})