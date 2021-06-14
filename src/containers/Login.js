import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            logged: false
        }
    }
    handleChange = input => e => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();

        const request = {
            method: 'GET',
        };

        fetch('https://scc-backend-52420.azurewebsites.net/jacuzi/checkUserE/' + this.state.email + '/' + this.state.password,
            request).then(a => {
                if (a.status === 200) {
                    a.text().then(b => {
                        if (b === this.state.email) {
                            this.props.history.push("/homepage");
                        }
                    })
                }
            });
    }

    signup = () => {
        this.props.history.push("/signup");
    }

    render() {
        const { email, password } = this.state;

        return (

            <div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange('email')} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange('password')} />
                    </div>
                    <button type="signin">Login</button>

                </form>
                <div>
                    <button onClick={this.signup} type="signup">Registar</button>
                </div>

            </div>
        )
    }
}
export default withRouter(Login);