import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseconfig'

const Form = () => {

let [user,setUser]=useState({
    email:'',
    password:''
})


let nav=useNavigate()

function submit(e){
    e.preventDefault() 
   
  
    createUserWithEmailAndPassword(auth,user.email,user.password)
      .then(res=>{
        console.log(res);
        nav('/signup',{state:user})
      })
  

}
function getvalue(e){

    setUser({...user,[e.target.name]:e.target.value})
}


return (
  <div>
   <form onSubmit={submit}>
   <input placeholder='Enter email' type='text' name='email' value={user.email} onChange={getvalue}></input><br></br><br></br>
    <input placeholder=' Enter password' type='text' name='password' value={user.password} onChange={getvalue}></input><br></br><br></br>
    <button>Submit</button>
       

</form>

    </div>
  )
}

export default Form