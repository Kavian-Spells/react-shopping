import deepcopy from "deepcopy";

var initialState = {
    shopping_list: [
        {name: "Milk", in_cart: false},
        {name: "Eggs", in_cart: false}
    ]
};

function slist_reducer (state, action) {
    if (state === undefined) {
        return initialState;
    }

    console.log(action);
    if (action.type === 'IN_CART') {
        let new_state = deepcopy(state);
        new_state.shopping_list[action.data.index].in_cart = !state.shopping_list[action.data.index].in_cart;
        return new_state;
    }
      
    return state;
}

export default slist_reducer;