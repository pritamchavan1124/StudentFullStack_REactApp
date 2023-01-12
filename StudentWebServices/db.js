const mysql2=require('mysql2')
const pool=mysql2.createPool({
    host:'localhost',
    user:'root',
    password:'root123',
    port:3306,
    database:'studRegistration',
    waitForConnection:true

})
module.exports=pool