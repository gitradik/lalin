import _ from 'lodash';
const regexPhone = /^\+?3?8?(0\d{9})$/;

export const isValidPhone = (value) => {
    let phone = _.clone(value);
    return regexPhone.test(phone);
};