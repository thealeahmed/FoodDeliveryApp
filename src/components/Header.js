import { LOGO_URL }  from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const  [btnName,setbtnName]=useState("Login") 
    return(
        <div className="header">
            <div >
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button   className="login"
                        onClick={()=>{
                            (btnName==="Login")?   setbtnName("LogOut")
                            :setbtnName("Login")
                            
                        }}>
                      {btnName}
                    </button>
                </ul>
            </div>
        </div>
    ); 
}
export default Header;