import react from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import {toggleinCart} from './actions.js'

class ShoppingList extends (react.Component) {
    handleChange(event, index) {
        this.props.updateCart(index, event.target.value);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <ul>
                        {this.props.shopping_list.map((item, index) => {
                            return <li key={index}>
                                <input type="checkbox" />
                                {item.name}
                                </li>;
                        })}
                    </ul>
                </CardContent>
                <CardActions>
                    <Button>Add Item</Button>
                </CardActions>
            </Card>
        )
    }
}

function mapStateToProps (state) {
    return {shopping_list: state.shopping_list};
}

function mapDispatchToProps (dispatch) {
    return {
      updateCart: function (index, toggleinCart) {
        dispatch(toggleinCart(index, toggleinCart))
      }
    }
  }

var ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
export default ConnectedShoppingList;