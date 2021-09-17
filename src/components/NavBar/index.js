import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";
import Logout from "../../components/Logout";
import Signup from "../../pages/Signup";
import UserProfile from "../../pages/UserProfile";
import "./styles.css";


const linkStyle = {
    padding: "5px",
    textDecoration: "none",
};

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="flex-nav">
                    <Link to="/" style={linkStyle}>
                        Home
                    </Link>
                    <Link to="/login" style={linkStyle}>
                        Login
                    </Link>
                    <Link to="/logout" style={linkStyle}>
                        Logout
                    </Link>
                    <Link to="/signup" style={linkStyle}>
                        Signup
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                        Profile
                    </Link>
                </div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <HomePage {...props} />}
                    />
                    <Route
                        path="/login"
                        render={(props) => <Login {...props} />}
                    />
                      <Route
                        path="/logout"
                        render={(props) => <Logout {...props} />}
                    />
                    <Route
                        path="/signup"
                        render={(props) => <Signup {...props} />}
                    />
                    <Route
                        path="/profile"
                        render={(props) => <UserProfile {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Nav;
