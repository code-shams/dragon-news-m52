import React from "react";
import { NavLink } from "react-router";

const AllCategories = ({ categories }) => {
    return (
        <div>
            <p className="font-semibold">All Categories</p>
            <div className="grid grid-cols-1 gap-1 mt-3">
                {categories.map((item) => (
                    <NavLink
                        key={item.id}
                        className={({ isActive }) =>
                            isActive ? "text-black btn bg-base-300" : "text-accent btn btn-ghost"
                        }
                        to={`category/${item.id}`}
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default AllCategories;
