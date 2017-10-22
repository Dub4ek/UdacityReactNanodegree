import React  from "react";
import './categoriesView.css';
import {List, ListItem, Subheader} from "material-ui";


class CategoriesView extends React.Component {
    static CATEGORIES = [{id:0, name:'First'}, {id:1, name:'Second'}, {id:2, name:'Third'}];

    listItem_clickHandler(event) {
        console.log('Click on the categories item', event);
    }

    render() {
        return (
            <div className="categories">
                <List>
                    <Subheader>Categories</Subheader>
                    {CategoriesView.CATEGORIES.map((x) =>
                        <ListItem key={x.id} onClick={(e) => this.listItem_clickHandler(e)} primaryText={x.name}/>)
                    }
                </List>
            </div>
        )
    }
}

export default CategoriesView;

