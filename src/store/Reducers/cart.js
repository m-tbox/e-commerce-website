import { ADD_TO_CART, REMOVE_FROM_CART } from "../Actions/actionTypes";

export const initialState = {
    data: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                data: [...state.data, action.payload]
            };

        case REMOVE_FROM_CART:
            const index = state.data.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            let newCart = [...state.data];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as it is not in the cart !`)
            }

            return {
                ...state,
                data: newCart
            }

        default:
            return state;
    }
}

export default cartReducer