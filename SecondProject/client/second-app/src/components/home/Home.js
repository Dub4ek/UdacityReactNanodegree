import React, {Component} from 'react';
import CategoriesView from "../categoriesView/CategoriesView";
import TopicView from "../topicView/TopicView";
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <CategoriesView/>
                <TopicView/>
            </div>
        );
    }
}

export default Home;