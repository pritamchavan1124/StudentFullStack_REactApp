import { Link } from "react-router-dom"
import { useState } from "react"
const Login=()=>{

    const [obj,setobj]=useState({PRN:"",pwd:""})
    
    return(
        <div>
            <h1>Student Login :</h1>
            <form id="mydiv">
                <label htmlfor="prn">Enter PRN no:</label>
                <input type="text" for="prn" id="prn" name="PRN" onChange={(e)=>setobj({...obj,PRN:e.target.value})}></input>
                <br></br>
                <lable htmlfor="pwd">Enter Password</lable>
                <input type="password" for="pwd" id="pwd" name="pwd" onChange={(e)=>setobj({...obj,pwd:e.target.value})}></input>
                <br></br>
                <br></br>
                <button type="submit">Login</button>
                <Link to='/register'>
                <button type="submit" id="btn" name="btn">Sign up</button></Link>
                {/* <br></br>
                <br></br>
                <button type="button" id="btn1" name="btn1">Sign up</button> */}
                
            </form>
        </div>
    )
}
export default Login