import React, { useState } from "react";
import { func } from "prop-types";
import * as PostService from "../../api/PostService";

const CodeButton = ({id, getLikesAgain, user}) => {
    const [goodcode, setGoodCode] = useState(0);
    const [badcode, setBadCode] = useState(0);
    const [uniquecode, setUniqueCode] = useState(0);
    
    const handleSubmit = async () => {
        let newLike = { author: user._id, goodcode, badcode, uniquecode };
        const res = await PostService.createLike(id, newLike);
        if (res.status === 201) {
            setGoodCode(0);
            setBadCode(0);
            setUniqueCode(0);
            getLikesAgain();
        } else {
            alert("I'm broken :(");
        }
    };

    
    return (
        <div>
            <button
                style={{ margin: "12px" }}
                onClick={() => handleSubmit(goodcode + 1)}
            >
                Nice Code!
            </button>
            <p>{goodcode} people think this is good code!</p>
            <button
                style={{ margin: "12px" }}
                onClick={() => handleSubmit(badcode + 1)}
            >
                Needs Work!
            </button>
            <p>{badcode} people think this needs some work!</p>
            <button
                style={{ margin: "12px" }}
                onClick={() => handleSubmit(uniquecode + 1)}
            >
                Unique Code!
            </button>
            <p>{uniquecode} people think this code is unique!</p>
        </div>
        
    );
};

CodeButton.propTypes = {
    getLikesAgain: func,
};


export default CodeButton;