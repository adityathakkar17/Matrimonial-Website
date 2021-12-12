import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";
import "../App.css";



const Navbar = () => {
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <NavLink className="btn btn-warning ml-lg-2 mr-auto" to="/home">Home </NavLink>
                            </li>
                            &emsp;
                            <li class="nav-item">
                                <NavLink className="btn btn-primary ml-lg-2" to="/search">Search</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand " to="/">
                            <div className="Sitename">
                                <i>Matri<span class="text-primary">Monial</span>&nbsp;Website</i>
                            </div>
                        </NavLink>

                            <ul class="navbar-nav ms-auto">
                                
                                <li class="nav-item">
                                    <NavLink className="btn btn-success ml-lg-2" to="/userprofile">UserProfile</NavLink>
                                </li>
                                &emsp;
                                <li class="nav-item">
                                    <NavLink className="btn btn-danger ml-lg-2" to="/editprofile">Manage Profile</NavLink>
                                </li>
                                &emsp;
                                <li class="nav-item">
                                    <NavLink className="btn btn-warning ml-lg-2" to="/logout">Logout</NavLink>
                                </li>
                                &emsp;
                            </ul>
                        </div>
                    </nav>
                </>
            )
        }
        else {
            return (
                <>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                                <NavLink className="btn btn-warning ml-lg-2 mr-auto" to="/home">Home </NavLink>
                            </li>
                            &emsp;
                            <li class="nav-item">
                                <NavLink className="btn btn-primary ml-lg-2" to="/search">Search</NavLink>
                            </li>
                        </ul>
                        {/* </div> */}
                        
                            <NavLink class="navbar-brand" to="/">
                                <div className="Sitename">
                                    <i>Matri<span class="text-primary">Monial</span>&nbsp;Website</i>
                                </div>
                            </NavLink>

                            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}

                            <ul class="navbar-nav ms-auto">

                                &emsp;
                                <li class="nav-item">
                                    <NavLink className="btn btn-danger ml-lg-2" to="/login">Login</NavLink>
                                </li>
                                &emsp;
                                <li class="nav-item">
                                    <NavLink className="btn btn-success ml-lg-2" to="/register">Registration</NavLink>
                                </li>
                                &emsp;
                            </ul>

                            </div>
                        </nav>
                    
                </>
            )
        }
    }
    return (
        <>
            <div className="menu_style">
                <RenderMenu />
            </div>
        </>
    )

}

export default Navbar