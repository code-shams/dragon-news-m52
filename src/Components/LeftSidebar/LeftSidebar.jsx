import React, { useEffect, useState } from "react";
import AllCategories from "../AllCategories/AllCategories";
import { createCookieSessionStorage } from "react-router";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/categories.json");
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.log("Failed to fetch the catergories data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <AllCategories categories={categories}></AllCategories>
        </div>
    );
};

export default LeftSidebar;
