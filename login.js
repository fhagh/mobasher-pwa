import { InputText } from 'primereact/inputtext';
import {Image} from 'primereact/image'
import logo from '../pic/logo.png';
import {Password } from "primereact/password";
import {  Button} from "primereact/button";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import   '../App.css';

function Login(){

    const[username,setUsername]=useState();
    const[password , setPassword]=useState();
    const navigate=useNavigate();

    Login=()=>{
        if(username=="0912" && password=="1234"){
            window.location="/home";

        }


    }

    return(
        <div className="flex flex-column  h-screen login">
            <div className="flex mt-6 ml-8 pl-6" >
                <Image src={logo} imageStyle={{width:"5rem",height:"3rem"}}/>
            </div>
            <div className="flex  ml-8  font-bold text-xl text-yellow-600" style={{ paddingLeft:"3.5rem"}}> مباشر ملت</div>
            <div className="flex  mt-5 pl-8  ">
                <span className="p-float-label text-200 " >
                        <InputText id="username" onChange={e=>setUsername(e.target.value)}/>
                        <label htmlFor="username " className="text-200 text-xl "  > شماره تلفن همراه</label>
                </span>
            </div>    
            <div className="flex  mt-4 pl-8  "  >
                <div className="p-float-label">
                    <Password toggleMask feedback={false}  className="p-input-icon-left  p-inputwrapper " 
                     onChange={e=>setPassword(e.target.value)}/> 
                    {/* <InputText type="password" />
                    <i className="pi pi-eye-slash text-color-secondary"/> */}
                    <label htmlFor="username " className="text-200 text-xl"> رمز ورود  </label>
                </div>
                 
            </div>    
            <div className="flex  mt-6 ml-7 pl-8">
                <Button label="ورود" className="font-bold text-xl" onClick={Login}/>
            </div>
        
           
        </div>


    )

}

export default Login;
