import React, { Component, useState }from 'react';
import "./style2.css";

const Login = () => {
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
          setToken(token);
          setEmail("");
          setPassword("");
          history.push("/");
      } else {
          alert("Server Error");
    }
  }
};


class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault(); // prevents event default behavior 

    // call the server 
    console.log('submitted'); 
  };
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Code Share</h1>
            </div>
              <div className="login-page">
                <div className="form">
                  <input type="text" placeholder="username"/>
                  <input type="password" placeholder="password"/>
                  <button>login</button>
                  <p className="message">Not registered? <a href="/#">Create an account</a></p>
               </div>
             </div>
      </form>
    )
  };
}; 

export default LoginForm; 