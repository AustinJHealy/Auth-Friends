import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "",
        },
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            },
        });
    };

    login = (e) => {
        e.preventDefault();
        // Make a POST request and send the credentials object to the api
        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then((res) => {
                window.localStorage.setItem("token", res.data.payload);
                // navigate the user to /protected (whatever landing page)
                this.props.history.push("/friend-page");
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Enter a username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter a passsord'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;