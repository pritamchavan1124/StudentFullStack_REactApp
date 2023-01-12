import { useState } from "react"
import {useHistory} from 'react-router-dom';
import axios from 'axios';
//app.use(cors());

const Register=()=>{
    const[studob,setstudobj]=useState({PRN:"",pwd:"",cmfpwd:""})

    // const handleChange=(e)=> {
    //     const {name,value}=e.target;
    //     setstudobj({...studob,[name]:value});
    //     console.log(studob);
    // };   

    
    return(
        <div>
             <h1>Student registration Form :</h1>
            <form id="mydiv1">
                <label for="prn">Enter PRN no:</label>
                <input type="text" for="prn" id="prn" name="PRN" value={studob.PRN} onChange={(e)=>setstudobj({...studob,PRN:e.target.value})} required></input>
                <br></br>
                <lable for="pwd">Enter Password</lable>
                <input type="password" for="pwd" id="pwd" name="pwd" value={studob.pwd} onChange={(e)=>setstudobj({...studob,pwd:e.target.value})}></input>
                <br></br>
                <br></br>
                <lable for="pwd">Confirm Password</lable>
                <input type="password" for="pwd1" id="pwd1" name="cmfpwd" value={studob.cmfpwd} onChange={(e)=>setstudobj({...studob,cmfpwd:e.target.value})}></input>
                <br></br>
                <br></br>
                <button type="submit" name="btn" id="btn" onClick={(e)=>{
                        e.preventDefault();
                        axios.post("http://localhost:3000/register",studob)
                        .then((resp)=>{
                            console.log("in axios")
                            console.log(resp)
                        })
                        .catch((err) =>console.log(err))
                    }}>
                    submit</button>
                </form>
        </div>
    )
}
export default Register