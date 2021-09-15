import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style2.css";
import * as UserService from "../../api/UserService";
import { setToken } from "../../utils/tokenService";

const LoginForm = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        const user = {
            email,
            password,
        };

        const res = await UserService.login(user);
        if (res.data.data) {
            const token = res.data.data.token;
            console.log("FROM LOGIN FORM: ", token);
            setToken(token);
            setEmail("");
            setPassword("");
            history.push("/");
        } else {
            alert("Server Error");
        }
    };

    return (
      <div>
        <div>
          <h1>Code Share</h1>
            </div>
              <div className="login-page">
                <div className="form">
                  <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="email"/>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password"/>
                  <button onClick={handleSubmit}>login</button>
                  <p className="message">Not registered? <a href="/signup">Create an account</a></p>
               </div>
             </div>
      </div>
    )
  };
 

export default LoginForm; 