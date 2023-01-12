import { useState } from "react"
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";



const StudentDetails=()=>{

    const [object,setobject]=useState({RollNo:"",studName:"",course:"",dateOA:"",marks:"",phoneNO:""})

    return (
        <div>
            <h1>Fill Student Details :</h1>
           <form>

           <label for="RollNo">Roll No:</label>
           <input type="text" id="RollNo" name="RollNo" placeholder="Your RollNo.." onChange={(e)=>setobject({...object,RollNo:e.target.value})}></input>

           <label for="studName">Student Name:</label>
           <input type="text" id="studName" name="studName" placeholder="Your name.." onChange={(e)=>setobject({...object,studName:e.target.value})}></input>

           <label for="course">Course Name:</label>
           <input type="text" id="course" name="course" placeholder="Your Course Name.." onChange={(e)=>setobject({...object,course:e.target.value})}></input>

           <label for="dateOA">Date of Admission:</label>
           <input type="date" id="dateOA" name="dateOA" placeholder="Your Date of Admission.." onChange={(e)=>setobject({...object,dateOA:e.target.value})}></input>

           <label for="marks">Markse:</label>
           <input type="text" id="marks" name="marks" placeholder="Your Marks.." onChange={(e)=>setobject({...object,marks:e.target.value})}></input>

           <label for="phoneNO">PhoneNO</label>
           <input type="text" id="phoneNO" name="phoneNO" placeholder="Your phone no.." onChange={(e)=>setobject({...object,phoneNO:e.target.value})}></input>

           <Link to='/studentDetails'>
           <button type="submit" name="btn" id="btn" onClick={(e)=>{
                                    e.preventDefault();
                                    axios.post("http://localhost:3000/student",object)
                                    .then((resp)=>{
                                        console.log(resp)
                                    })
                                    .catch((err) =>console.log(err))
                                }}>
                                submit</button></Link>
           </form>
        </div>
    )

}
export default StudentDetails