import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';


class ScheduleMeeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            topic: '',
            start: '',
            time: ''
        };

    }
    handleChange = input => e => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { topic, start, time } = this.state;

        var id = "reuniao" + Date.now();
        localStorage.setItem(id, [topic, start, time]);
        console.log("Reunião agendada");
        this.props.history.push("/homepage");

    };
    exit = () => {
        this.props.history.push("/homepage");
      }
    render() {
        const { topic, start, time } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                Agendar Reunião!
                <p></p>
                <div>
                    Tópico: <input type="text" name="topic" value={topic} onChange={this.handleChange('topic')} />
                </div>
                <p></p>

                <div>
                    Início: <input type="datetime-local" name="start" value={start} onChange={this.handleChange('start')} />
                </div>
                <p></p>
                <div>
                    Duração(horas): <input type="number" name="time" value={time} onChange={this.handleChange('time')} />
                </div>
                <p></p>
                <button type="submit">Agendar</button>
                
                <div>
          <button className="exit" onClick={this.exit}>Exit</button>
        </div>
            </form>
        );
    }
}
export default withRouter(ScheduleMeeting);