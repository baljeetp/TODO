import React, { useState } from "react";
import "./Signup.css";
import HeadingComp from "./headingComp";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {authActions} from "../../store";

const Signin=()=>{
    const dispatch=useDispatch();
    const history=useNavigate();
    const [Inputs,setInputs]=useState({
        email:"",
        password:"",
    });
    const change= (e)=>{
        const {name,value}=e.target;
        setInputs({...Inputs,[name]:value});
     };
     const submit= async (e)=>{
            e.preventDefault();
            await axios.post(`http://localhost:1000/api/v1/signin`,Inputs).then((response)=>{
                    sessionStorage.setItem("id",response.data.others._id);
                    dispatch(authActions.login());
                    history("/todo"); 
            } );   
     };
    return (
        <div className="signup IMAGE ">
            <div className="container">
                <div className="row">
                <div className="  col-lg-4 column   d-lg-flex justify-content-center align-items-center d-none">
                      <HeadingComp first="Sign" second=" In"/> 
                    </div>
                    <div className="  col-lg-8 column column-left d-flex justify-content-center align-items-center ">
                        <div className="d-flex flex-column w-100 p-3">
                            <input className="p-2 my-3 input-signup" type="email" placeholder="Enter email" name="email" value={Inputs.email} onChange={change}/>
                            <input className="p-2 my-3 input-signup" type="password" placeholder="Enter password" name="password" value={Inputs.password} onChange={change}/>
                            <div><button className="btn-signup p-2  justify-content-end align-items-end" onClick={submit}>Sign In</button></div>
                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}
export default Signin;