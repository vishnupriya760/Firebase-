import React from 'react'
import { auth,provider } from './firebaseconfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const Signupgoogle = () => {
let navigator=useNavigate()

    function handlesignup(){
        signInWithPopup(auth,provider)
        .then(res=>{
            console.log(res);
            navigator('/clock')
            
        })}

  return (
    <div>
        <button onClick={handlesignup}>Signup</button>
    </div>
  )
}

export default Signupgoogle