const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const db=require('./db')
const { response } = require('express')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Credentials", true);
	next();
});

app.get('/student',(request,response)=>{
    const statement=`select * from studentDetails`;
    db.execute(statement,(error,data)=>{
        response.send(data)
    })
})

app.post('/student',(request,response)=>{
    const{RollNo,studName,course,dateOA,marks,phoneNO}=request.body;
    const statement=`insert into studentDetails values ('${RollNo}','${studName}','${course}','${dateOA}',${marks},'${phoneNO}')`;
    db.execute(statement,(error,data)=>{
        response.send(data)
    })
})

app.get('/user',(request,response)=>{
    const statement=`select * from registration`;
    db.execute(statement,(error,data)=>{
        response.send(data)
    })
})

app.post('/register',(request,response)=>{
    const{PRN,pwd,cmfpwd}=request.body;
    const statement=`insert into registration values(${PRN},'${pwd}','${cmfpwd}')`;
    
    db.execute(statement,(error,data)=>{
        console.log(PRN,pwd,cmfpwd);
        console.log("in server")
        console.log(data)
        response.send(data)
    })
})
app.post('/login',(request,response)=>{
    const{PRN,pwd}=request.body;
    const statement=`select * from registration where PRN=${PRN} and pwd='${pwd}'`;
    db.execute(statement,(error,data)=>{
        if(error){
            
        }
     else if(data){
            response.send(data)

        }
        else{
            response.send("Invalid detils found...please try again!!!")
        }
    })
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server is now started on port')
})