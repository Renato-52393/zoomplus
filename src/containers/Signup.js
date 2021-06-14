import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }
    handleChange = input => e => {
        e.preventDefault();


        this.setState({ [input]: e.target.value })
    }
    submitHandler = e => {

        e.preventDefault()

        const request = {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({

                username: this.state.username,
                email: this.state.email,
                password: this.state.password

            })
        };
        fetch('https://scc-backend-52420.azurewebsites.net/jacuzi/addUserE',
            request).then(_ => {
                console.log("Utilizador registado");
                this.props.history.push("/signin");
            });


    }

    render() {
        const { username, email, password } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="username" placeholder="username" value={username} onChange={this.handleChange('username')} />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="email" value={email} onChange={this.handleChange('email')} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" value={password} onChange={this.handleChange('password')} />
                    </div>
                    <button type="signup">Registar</button>
                </form>
            </div>

        )
    }
}
export default withRouter(Signup);