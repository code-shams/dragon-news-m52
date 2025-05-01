import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <h1 className="mb-3 text-primary font-bold">Login With</h1>
            <button className="btn btn-outline border-blue-400 w-full text-blue-400">
                <FcGoogle size={24} /> Login with Google
            </button>
            <button className="btn btn-outline border-accent w-full text-accent mt-3">
                <FaGithub size={24} /> Login with Github
            </button>
        </div>
    );
};

export default SocialLogin;
