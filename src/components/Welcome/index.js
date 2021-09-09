import React from "react";
import Likes from "../Likes"
import "./styles.css";

function Welcome() {
    return (
        <div className="flex-body">
            <h1 className="welcome-text">Welcome to CodeShare</h1>
            <Likes />
        </div>
    );
};
export default Welcome;