import { combineReducers } from 'redux'
import cart from './cart'
import user from './user'

const rootReducer = combineReducers ({
    cart,
    user
})

export default rootReducer