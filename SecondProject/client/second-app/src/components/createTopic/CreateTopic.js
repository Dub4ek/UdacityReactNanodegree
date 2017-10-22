import React from "react";
import {AppBar, IconButton, MenuItem, RaisedButton, SelectField, TextField} from "material-ui";
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import './createTopic.css';
import {Redirect} from "react-router-dom";

class CreateTopic extends React.Component {
    state = {
        navigateHome: false
    }
    backButton_clickHandler(e) {
        this.setState({navigateHome: true});
    }

    createButton_clickHandler(e) {

    }

    render() {
        const {navigateHome} = this.state;

        if (navigateHome) {
            return <Redirect to="/" push/>
        }

        return (
            <div>
                <AppBar title="Create topic" iconElementLeft={<IconButton onClick={(e) => this.backButton_clickHandler(e)}><ArrowBack/></IconButton>}/>
                <div className="createTopic">
                    <TextField fullWidth={true} floatingLabelText="Author"></TextField>
                    <TextField fullWidth={true} floatingLabelText="Title"></TextField>
                    <SelectField floatingLabelText="Category">
                        <MenuItem></MenuItem>
                    </SelectField>
                    <TextField fullWidth={true} multiLine={true} rows={5} rowsMax={10} floatingLabelText="Text"/>
                    <div className="createButton">
                        <RaisedButton onClick={(e) => this.createButton_clickHandler(e)} label="Create" primary={true}></RaisedButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateTopic;

