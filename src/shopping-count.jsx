import react from 'react';
import { connect } from 'react-redux';


class ShoppingCount extends (react.Component) {
    render() {
        var in_cart = 0;
        this.props.shopping_list.forEach((item) => {
            if (item = in_cart) {
                in_cart += 1;
            }
        });
        return (
            <div>In Cart: {in_cart} - Total Item: {this.props.shopping_list.length}</div>
        )
    }
}

function mapStateToProps (state) {
    return {shopping_list: state.shopping_list};
}

var ConnectedCount = connect(mapStateToProps)(ShoppingCount);
export default ConnectedCount;