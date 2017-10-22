import React, {Component} from 'react';
import {AppBar, IconButton, Paper} from "material-ui";
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import './style.css';
import {Redirect} from "react-router-dom";


class TopicDetails extends Component {
    state = {
        navigateHome: false
    };

    backButton_clickHandler(e) {
        this.setState({navigateHome: true});
    }

    render() {
        const {navigateHome} = this.state;

        if (navigateHome) {
            return <Redirect to="/" push></Redirect>
        }

        return (
            <div className="topicDetails">
                <AppBar title={this.props.topicName} iconElementLeft={<IconButton onClick={(e) => this.backButton_clickHandler(e)}><ArrowBack/></IconButton>}/>
                 <div className="topicArea">
                     <Paper className="topicArea__main-topic" zDepth={2}>
                         <span>Author: Vasilyi</span>
                     </Paper>
                     <Paper className="topicArea__comment" zDepth={1}></Paper>
                     <Paper className="topicArea__comment" zDepth={1}></Paper>
                     <Paper className="topicArea__comment" zDepth={1}></Paper>
                 </div>
            </div>
        )
    }
}

export default TopicDetails;