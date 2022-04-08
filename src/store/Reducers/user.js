import { SET_USER } from "../Actions/actionTypes";

export const initialState = {
    data: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default userReducer
