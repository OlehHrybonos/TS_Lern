"use strict";
let a = 'oleh';
//number//
let b = 1;
let c = -10;
let d = 3.5;
let e = 10000;
//string//
let f = 'oleh';
let g = "hrybonos";
let h = `f i n t`;
//boolean//
let s = true;
let k = false;
//next lessons//
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
//next lessons functions//
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
//next lessons object//
function getFullNameObject(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Oleh',
    surname: 'Hrybonos',
    city: 'Mykolaiv',
    age: 35,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullNameObject(user));
//next lessons object//
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
