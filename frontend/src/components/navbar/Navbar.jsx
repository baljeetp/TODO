import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {authActions} from "../../store";
import {useNavigate} from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
const Navbar=()=>{
  const history=useNavigate();
  const submit=(e)=>{
    e.preventDefault();
    history("/signin");
  }
   const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  const dispatch=useDispatch();
  const logout=()=>{
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }
    return (
        <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand todo" to="/"><GiNotebook className="todo-icon" /><b>TODO</b></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todo">todo</Link>
              </li>
              {!isLoggedIn && <>
                <div className="d-flex ">
                <li className=" nav-item sign mx-lg-2 mx-2">
                <Link className="nav-link active  p-2 " aria-current="page" to="/signup">Sign Up</Link>
              </li>
                </div>
              <div className="d-flex my-3 my-lg-0">
              <li className="nav-item sign mx-lg-2 mx-2 " >
                <Link className="nav-link active  p-2 " aria-current="page" to="/signin">Sign In</Link>
              </li>
              </div>
              </> }
              {isLoggedIn &&  <>
                <div className="d-flex my-3 my-lg-0">
                <li className="nav-item sign mx-2" onClick={logout}>
                <Link className="nav-link active p-2 " aria-current="page" to="#" onClick={submit}>Log Out</Link> 
              </li>
                </div>
              </>}
              
              
              
            </ul>
            
          </div>
        </div>
      </nav></div>
    )
}
export default Navbar;