import { useSelector } from 'react-redux';

function GetTotalNumberOfItemsInCart() {
    const cart = useSelector(state => state.cart);

    return cart?.data?.length;
}

function GetSubtotalOfCart() {
    const cart = useSelector(state => state.cart);
    return cart?.data?.reduce((ammount, item) => ammount + (item.price || 0), 0);
}

function GetCart() {
    const cart = useSelector(state => state.cart);
    return cart?.data;
}

export {
    GetTotalNumberOfItemsInCart,
    GetSubtotalOfCart,
    GetCart
}