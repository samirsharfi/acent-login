import { useState } from "react";
import { ReactComponent as Acent } from '../assets/Acent.svg';
import { useNavigate } from "react-router-dom"
import '../App.css'

function Dashboard() {
    const [privateKey, setPrivateKey] = useState('')
    const [receivingAddress, setReceivingAddress] = useState('')
    const navigate = useNavigate();

        
    const handleLogOutClick = ()=>{
        console.log()
        navigate("/");
      
      }

    const handleClick = ()=>{
      console.log(privateKey)
      console.log(receivingAddress)
    
    }
          return (
            <form className="home-page">
                <div className="navbar">
                    <>
                   <Acent style={{width:'50px', margin:'5px 10px'}}/> 
                   </>
                   <> 
                   <input type="submit" value="Log out" onClick={()=> handleLogOutClick()}/>
                   </>
                   
                </div>
              <div className="home-page-control">
                 <label>Private Key</label>
                 <input required type="private key" placeholder="" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)}/>
            </div>
            <div className="home-page-control">
                 <label>Receiving Address</label>
                 <input  type="address" placeholder="" value={receivingAddress} onChange={(e) => setReceivingAddress(e.target.value)}/>
            </div>
            <button className="submit-btn" onClick={()=> handleClick()}>Send</button>
            </form>
          );
        }
        
        export default Dashboard;