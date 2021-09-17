import React from "react";
import background from "../../images/background.jpg";

import "./styles.css";

const Welcome = (props) => {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="flex-body"
        >
            <h1 className="welcome-text">Welcome to CodeShare!</h1>
        </div> 
    );
};
export default Welcome;