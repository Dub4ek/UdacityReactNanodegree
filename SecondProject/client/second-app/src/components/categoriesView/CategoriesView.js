import React  from "react";
import './categoriesView.css';
import {List, ListItem, Snackbar, Subheader} from "material-ui";
import * as TopicAPI from '../../utils/TopicsAPI'


class CategoriesView extends React.Component {
    static CATEGORIES = [{id:0, name:'All'}, {id:1, name:'First'}, {id:2, name:'Second'}, {id:3, name:'Third'}];

    state = {
        categories: [],
        loadingError: false
    }

    listItem_clickHandler(event) {
        console.log('Click on the categories item', event);
    }

    componentDidMount() {
        TopicAPI.getCategories()
            .then(result => this.setState({categories: result}))
            /*.fail((resolve) => {
                this.setState();
            });*/
    }

    render() {
        const {categories} = this.state;
        const {loadingError} = this.state;
        console.log(categories);
        return (
            <div className="categories">
                <List>
                    <Subheader>Categories</Subheader>
                    {/*{categories.map((x) =>
                        <ListItem key={x.id} onClick={(e) => this.listItem_clickHandler(e)} primaryText={x.name}/>)
                    }*/}
                </List>
                <Snackbar open={loadingError} message="Couldn't load categories"></Snackbar>
            </div>
        )
    }
}

export default CategoriesView;

