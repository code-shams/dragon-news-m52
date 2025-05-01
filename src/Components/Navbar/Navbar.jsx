import React from "react";
import { NavLink } from "react-router";
import userPic from "../../assets/user.png";

const Navbar = () => {
    return (
        <div className="grid grid-cols-3 items-center">
            <div>
                
            </div>
            <div className="text-accent justify-self-center space-x-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="flex gap-3 justify-self-end items-center">
                <img src={userPic} alt="" />
                <button className="btn btn-primary px-10">Login</button>
            </div>
        </div>
    );
};

export default Navbar;
