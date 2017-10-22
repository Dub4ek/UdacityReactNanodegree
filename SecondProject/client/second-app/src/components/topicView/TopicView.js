import React, {Component} from 'react';
import {AppBar, IconButton, Paper} from "material-ui";
import TimerIcon from 'material-ui/svg-icons/image/timer';
import DateIcon from 'material-ui/svg-icons/action/date-range';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './topicView.css'
import { Redirect } from 'react-router-dom';

class TopicView extends Component {
    state = {
        topicDetails: false,
        addTopic: false
    };

    changeSortByTime(event) {
        console.log('Change sort by time click');
    }

    changeSortByVote(event) {
        console.log('Change sort by vote click');
    }

    topic_clickHandler(event) {
        this.setState({topicDetails: true});
    }

    addTopic_clickHandler(event) {
        this.setState({addTopic: true});
    }

    render() {
        const {topicDetails} = this.state;
        const {addTopic} = this.state;

        if (topicDetails) {
            return <Redirect to='/details/a' push={true}/>
        }

        if (addTopic) {
            return <Redirect to='/create' push={true}/>
        }


        return (
            <div className="container">
                <AppBar showMenuIconButton={false} className="appBar" title="Topics" iconElementRight={
                    <div>
                        <IconButton onClick={(e) => this.changeSortByTime(e)}><TimerIcon /></IconButton>
                        <IconButton onClick={(e) => this.changeSortByVote(e)}><DateIcon /></IconButton>
                    </div>
                }></AppBar>
                <div className="topics">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(x => <Paper onClick={(e) => this.topic_clickHandler(e)} key={x} className="topic" zDepth={2}></Paper>)}
                </div>
                <div className="floatingButton">
                    <FloatingActionButton onClick={(e) => this.addTopic_clickHandler(e)}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        );
    }
}

export default TopicView;