const express=require("express")
var cors = require('cors')
const app=express();
app.use(cors())
app.use(express.json())

app.post("/userlist",function(req,res){
   console.log(req.body)
   res.send(req.body)
})

app.listen(8000,function(){
    console.log("Server running")
})
