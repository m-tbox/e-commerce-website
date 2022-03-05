import { ADD_TO_CART } from "../Actions/actionTypes";

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

        default:
            return state;
    }
}

export default cartReducer