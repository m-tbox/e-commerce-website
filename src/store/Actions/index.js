import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    SET_USER
} from './actionTypes';

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = ({ id }) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const removeAllFromCart = ({ id }) => {
    return {
        type: REMOVE_ALL_FROM_CART,
        id
    }
}

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
}