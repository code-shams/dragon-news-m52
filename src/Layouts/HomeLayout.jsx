import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import LeftSidebar from "../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../Components/RightSidebar/RightSidebar";

const HomeLayout = () => {
    return (
        <div className="max-w-[1550px] mx-auto">
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto mt-10 grid grid-cols-12 gap-10">
                <aside className="col-span-3">
                    <LeftSidebar></LeftSidebar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightSidebar></RightSidebar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;
