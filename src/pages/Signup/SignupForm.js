import React, { useState } from "react";
import "./styles.css";
import * as UserService from "../../api/UserService";
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/tokenService";

const SignupForm = () => {
    const history = useHistory();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        };

        const res = await UserService.create(newUser);

        //trying to extract a token
        if (res.data.data) {
            if (res.data.data.token) {
                const token = res.data.data.token;
                setToken(token);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                //redirect to home
                history.push("/");
            }
        } else {
            alert("Server Error");
        }
    };

    return (
        <div className="SignupForm-inputs">
            <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                title="firstName"
                placeholder="First Name"
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                title="lastName"
                placeholder="Last Name"
            />
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                title="email"
                placeholder="Email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                title="password"
                placeholder="Password"
            />
            <button onClick={handleSubmit}>SIGNUP TO START SHARING CODE </button>
        </div>
    );
};

export default SignupForm;