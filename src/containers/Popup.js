import { useState } from 'react';
import AddMeetingPopup from './AddMeetingPopup.js';

import { useHistory } from "react-router-dom";

function Popup() {
    let history = useHistory();
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div className="App">
            <main>
                <h1>React Popups</h1>
                <br /><br />
                <button

                    onClick={() => setButtonPopup(true)}
                    button onClick={() => {
                        history.push("/add-meeting");
                    }}>

                    Open Popup</button>

            </main>

            <AddMeetingPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
                <p>This is my button triggered popup</p>
            </AddMeetingPopup>
        </div>
    );
}

export default Popup;