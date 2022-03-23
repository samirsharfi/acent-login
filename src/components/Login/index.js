import {useState} from 'react'
import { ReactComponent as Acent } from '../../assets/Acent.svg';
import './style.css'


function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');


  
    function onSubmit(e){
      e.preventDefault();
      setErrorPassword('');
    if(password.length < 8){
        setErrorPassword('Password Must Be More Than 8 Letters');
        return 
    }
     if(email === "a@l.com" && password === "12345678"){
        props.onCofirm();
        setEmail('');
        setPassword('');
        setErrorPassword('')
     }else{
      setErrorPassword('Wrong password');
     }  
  }

  return (
    <div>
      <form className="login-form" onSubmit={onSubmit}>  
        <Acent style={{width:'130px', marginTop:'-50px'}}/>    
        <div className="form-control">
        <span style={{ fontSize: "20px", paddingLeft:'120px',paddingTop:'50px' }}> <b>Log In</b></span>
          <label><small>Email</small></label>
          <input required type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label><small>Password</small></label>
          <input required type="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span style={{ color: "red", paddingLeft:'10px' }}><small>{errorPassword}</small></span>
        </div>
        <button  className="submit-btn">submit</button>
      </form>
    </div>
  );
}
export default LoginForm;
