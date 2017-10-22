import React, {Component} from 'react';
import {AppBar, FloatingActionButton, IconButton, Paper} from "material-ui";
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './style.css';
import {Redirect} from "react-router-dom";


class TopicDetails extends Component {
    state = {
        navigateHome: false
    };

    backButton_clickHandler(e) {
        this.setState({navigateHome: true});
    }

    addComment_clickHandler() {
        
    }

    render() {
        const {navigateHome} = this.state;

        if (navigateHome) {
            return <Redirect to="/" push></Redirect>
        }

        return (
            <div className="topicDetails">
                <AppBar title={this.props.topicName} iconElementLeft={
                    <IconButton onClick={(e) => this.backButton_clickHandler(e)}><ArrowBack /></IconButton>} />
                <div className="topicArea">
                    <Paper className="topicArea__main-topic" zDepth={2}>
                        <div className="topic__header">
                            <span>Author: Vasilyi</span>
                            <div className="topic__buttons">
                                <IconButton><EditIcon/></IconButton>
                                <IconButton><DeleteIcon/></IconButton>
                            </div>
                        </div>
                    </Paper>
                    <Paper className="topicArea__comment" zDepth={1}>
                        <div className="comment__buttons">
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                        </div>
                    </Paper>
                </div>
                <div className="floatingButton">
                    <FloatingActionButton onClick={(e) => this.addComment_clickHandler(e)}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

export default TopicDetails;