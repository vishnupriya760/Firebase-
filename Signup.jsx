import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseconfig' 

const Signup = () => {
let[check,setCheck]=useState({})

function getvalues(e){
    setCheck({...check,[e.target.name]:e.target.value})
}
function submits(e){
    e.preventDefault()
    console.log(check);
    
    signInWithEmailAndPassword(auth,check.email,check.password)
      .then(res=>{
        console.log(res);
        alert('login successful')
      })
      .catch(err=>{
        console.log(err);
        alert('login failed')
      })

} 
  return (
    <div>
      <form onSubmit={submits}>
<input placeholder='enter email' type='text' name='email' value={check.email  } onChange={getvalues}></input> <br></br> <br></br>
<input placeholder='enter password' type='text' name='password' value={check.password } onChange={getvalues}></input><br></br> <br></br>
<button>Login</button>
</form>
    </div>
  )
}

export default Signup