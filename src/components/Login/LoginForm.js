import React, { Component }from 'react';
import "./style2.css";


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
  }
}; 

export default LoginForm; 