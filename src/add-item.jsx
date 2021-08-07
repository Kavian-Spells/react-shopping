import react from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {addItem} from './actions.js';
import { TextField } from '@material-ui/core';


class AddItem extends (react.Component) {
    constructor(props) {
        super(props);

        this.state = {item: ''};
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();

        //dispatch action
        this.setState({item: ''});
    }

    updateItem(event) {
        this.setState({item: event.target.value});
    }

    go_back(event) {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e) }>
                <Card style={{maxWidth: '500px', margin: '30px auto'}}>
                    <CardContent>
                        <TextField label="Item Name" value={this.state.item} onChange={(e) => this.updateItem(e)}/>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" color="primary" variant="contained">Add Item</Button>
                        <Button type="button" onClick={(e) => this.go_back()}>Go Back to List</Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

// function mapStateToProps (state) {
//     return {};
// }

// function mapDispatchToProps (dispatch) {
//     return {
//       addItem: function (data) {
//         dispatch(data))
//       }
//     }
//   }

// var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
// export default ConnectedShoppingList;


export default AddItem;