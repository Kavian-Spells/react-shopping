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
      
    return state;
}

export default slist_reducer;