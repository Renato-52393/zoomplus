import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


class Channel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            members: ''
        };

    }
    handleChange = input => e => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, members } = this.state;

        var id = "canal" + Date.now();
        localStorage.setItem(id, [name, members]);
        console.log('Canal criado!');
    };

    exit = () => {
        this.props.history.push("/homepage");
    }

    render() {
        const { name, members } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                Criar Canal!
                <p></p>
                <div>
                    Nome do Canal: <input type="text" name="name" value={name} onChange={this.handleChange('name')} />
                </div>
                <p></p>

                <div>
                    Membros: <input type="text" name="members" value={members} onChange={this.handleChange('members')} />
                </div>
                <p></p>

                <p></p>
                <button type="submit">Criar</button>
                <div>
                    <button className="exit" onClick={this.exit}>Exit</button>
                </div>
            </form>
        );
    }
}
export default withRouter(Channel);