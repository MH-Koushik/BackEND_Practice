const express=require("express")
var cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json())

app.post("/userlist",function(req,res){
   let {fname,lname,email,password}=req.body;
   if(!fname){
       res.send("First Name Empty")
   }
   if(!lname){
    res.send("Last Name Empty")
    }

    if(!email){
        res.send("Mail Empty")
    }

    if(!password){
        res.send("Password Empty")
    }   
})
  


app.listen(8000,function(){
    console.log("Server running")
})
