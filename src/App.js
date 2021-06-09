import './App.css';
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import HomePage from "./containers/HomePage";
import JoinMeeting from "./containers/JoinMeeting";
import ScheduleMeeting from "./containers/ScheduleMeeting";
import Chat from "./containers/Chat";
import Channel from "./containers/Channel";
import Meeting from "./containers/Meeting";
import Forum from "./containers/Forum";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
 
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/join-meeting" component={JoinMeeting} />
          <Route exact path="/schedule-meeting" component={ScheduleMeeting} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/channel" component={Channel} />
          <Route exact path="/meeting" component={Meeting} />
          <Route exact path="/forum" component={Forum} />
          
        </Switch>
      </Router>
      </div>
      
  );
}
export default App;




