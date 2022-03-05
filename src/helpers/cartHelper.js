import { useSelector } from 'react-redux';

function GetTotalNumberOfItemsInCart() {
    const cart = useSelector(state => state.cart);

    return cart?.data?.length;
}

function GetSubtotalOfCart() {
    const cart = useSelector(state => state.cart);
    return cart?.data?.reduce((a, b) => a + (b['price'] || 0), 0);
}

export {
    GetTotalNumberOfItemsInCart,
    GetSubtotalOfCart
}