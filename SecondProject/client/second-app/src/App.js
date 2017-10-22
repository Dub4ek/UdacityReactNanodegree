import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import CreateTopic from "./components/createTopic/CreateTopic";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from "./components/home/Home";
import TopicDetails from "./components/topicDetails/TopicDetails";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => (
                    <MuiThemeProvider>
                        <Home></Home>
                    </MuiThemeProvider>
                )}></Route>
                <Route exact path="/create" render={() => (
                    <MuiThemeProvider>
                        <CreateTopic/>
                    </MuiThemeProvider>
                )}></Route>
                <Route exact path="/details/:id" render={() => (
                    <MuiThemeProvider>
                        <TopicDetails/>
                    </MuiThemeProvider>
                )}></Route>
            </div>
        );
    }
}

export default App;
