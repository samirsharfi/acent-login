import React,  {useState} from 'react'
import LoginForm from "../components/Login";
import Otp from "../components/Otp";
const Login = () =>{
    const [showOtp, setShowOtp]= useState(false);
    return(
        <div>
             <LoginForm onCofirm={() => setShowOtp(true)} />
              <Otp onCLose={()=> setShowOtp(false)} showModal={showOtp}/>
        </div>
    )
}

export default Login