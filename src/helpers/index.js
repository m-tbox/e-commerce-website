import * as _ from 'lodash';

export const hasError = (key, errors) => (
    errors.some(obj => Object.keys(obj).includes(key))
)

export const getErrorMsg = (key, errors) => {
    if (errors.find(error => error.hasOwnProperty(key)) !== undefined)
        return errors.find(error => error.hasOwnProperty(key))[key]
}


export const isEmailValid = (email) => {
    if (email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    else {
        return false;
    }
}

export const isEmailInValid = (email) => {
    if (isEmailValid(email)) {
        return false;
    }
    else {
        return true;
    }
}

export const getGropupedProducts = (prodcuts) =>  _.groupBy(prodcuts, (item) => item.id)