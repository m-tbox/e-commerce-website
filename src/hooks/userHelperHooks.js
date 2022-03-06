import { useSelector } from 'react-redux';

function GetUser() {
    const user = useSelector(state => state.user);

    return user?.data;
}

export {
    GetUser,
}