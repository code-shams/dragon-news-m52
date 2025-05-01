import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
import LatestNews from "../LatestNews/LatestNews";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 mt-3">
            <img className="w-[450px]" src={logo} alt="" />
            <p className="text-lg text-accent">
                Journalism Without Fear or Favour
            </p>
            <div className="text-xl">
                <span className="font-medium">
                    {format(new Date(), "EEEE, ")}
                </span>
                <span className="font-medium text-accent">
                    {format(new Date(), "MMMM MM, yyyy")}
                </span>
            </div>
            <section className="w-11/12">
                <LatestNews></LatestNews>
            </section>
            <section className="w-11/12">
                <Navbar></Navbar>
            </section>
        </div>
    );
};

export default Header;
