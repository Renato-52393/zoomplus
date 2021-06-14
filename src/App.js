import './App.css';
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomePage from "./containers/HomePage";
import JoinMeeting from "./containers/JoinMeeting";
import ScheduleMeeting from "./containers/ScheduleMeeting";
import Chat from "./containers/Chat";
import Channel from "./containers/Channel";
import Meeting from "./containers/Meeting";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/database';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';

class App extends Component {
  constructor(props){
    super(props);

    const config = {
      apiKey: "AIzaSyDVG17ueCmaPZx4qhdBxQ7mgPheqtLG1lQ",
      authDomain: "zoom-plus-39967.firebaseapp.com",
      projectId: "zoom-plus-39967",
      storageBucket: "zoom-plus-39967.appspot.com",
      messagingSenderId: "258527771473",
      appId: "1:258527771473:web:16394e5ca534a40d40f170"
    };
    if(!firebase.apps.length){
     firebase.initializeApp(config);
    }
    this.database = firebase.database();
  }

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/homepage" component={HomePage} />
            <Route exact path="/join-meeting" component={JoinMeeting} />
            <Route exact path="/schedule-meeting" component={ScheduleMeeting} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/channel" component={Channel} />
            <Route exact path="/meeting" component={Meeting} />
            <ThreadDisplay database={this.database}/>
            <Route exact path="/posteditor" component={ThreadDisplay} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;




