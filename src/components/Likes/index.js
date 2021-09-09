import React, { useState, useEffect } from "react";

function CodeButton() {
    const [goodcode, setGoodCode] = useState(0);
    const [badcode, setBadCode] = useState(0);
    const [uniquecode, setUniqueCode] = useState(0);
    useEffect(() => {
     
    }, [goodcode], [badcode], [uniquecode]);

    return (
        <div>
            <button
                style={{ margin: "12px" }}
                onClick={() => setGoodCode(goodcode + 1)}
            >
                Nice Code!
            </button>
            <p>{goodcode} people think this is good code!</p>
            <button
                style={{ margin: "12px" }}
                onClick={() => setBadCode(badcode + 1)}
            >
                Needs Work!
            </button>
            <p>{badcode} people think this needs some work!</p>
            <button
                style={{ margin: "12px" }}
                onClick={() => setUniqueCode(uniquecode + 1)}
            >
                Unique Code!
            </button>
            <p>{uniquecode} people think this code is unique!</p>
        </div>
        
    );
}


export default CodeButton;