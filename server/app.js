const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//write your code 

app.post('/user',(req,res)=>{
    req.body
    res.json({name:"Nisreen"});
})

app.get('/user',(req,res)=>{
    req.params
    res.json({name:"Nisreen"});
})


app.listen(3000,()=>{
   console.log('server running on port 3000'); 
});

