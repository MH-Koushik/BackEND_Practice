const express=require("express")
const app=express();

app.get("/userlist",function(req,res){
    let arr=[
        {
            name: "koushik"
        },
        {
            name: "babu1"
        },
        {
            name: "jony"
        }
    ]
    res.send(arr)
})

app.listen(8000,function(){
    console.log("Server running")
})
