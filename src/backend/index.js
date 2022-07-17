const fs = require('fs');
const express = require('express');
const app = express();


app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("Hello World!");
});

app.post('/student',(req,res)=>{
    console.log(req.body);
    const data = JSON.stringify(req.body);
    fs.appendFile('student.txt', data, (err)=>{
        if(err){
            console.log("Error Occured");
        }else{
            res.send("Created a file and saved")
        }
    })
    res.send('Done');
});

app.listen(3005, ()=>{
    console.log("Server started @ 3005");
});