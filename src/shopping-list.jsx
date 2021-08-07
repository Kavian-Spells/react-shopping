import react from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class ShoppingList extends (react.Component) {
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
var ConnectedShoppingList = connect(mapStateToProps)(ShoppingList);
export default ConnectedShoppingList;