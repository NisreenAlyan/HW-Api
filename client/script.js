//edit your code 
fetch('http://localhost:3000/user?name=NisreenAlyan',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
      
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})


fetch('http://localhost:3000/user',{
    method:'post',
    headers: {
        'Content-Type': 'application/json',
      },

      body:JSON.stringify 
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})