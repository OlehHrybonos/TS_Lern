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
//next lessons arrey//
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill);
}
//next lessons tuples обмежений кількістю типів//
const skillsTwo = [1, 'Dev'];
//next lessons redonly массив без можливості внесення змін//
const skillsThre = [1, 'Dev'];
//next lessons enums //
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILD"] = 3] = "FAILD";
})(StatusCode || (StatusCode = {}));
const resTwo = {
    message: 'True',
    statusCode: StatusCode.SUCCESS
};
/*
1 - true
2 - false
3 - drop
*/
function action(status) {
}
action(StatusCode.SUCCESS);
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
})(Roles || (Roles = {}));
const res2 = 1 /* RolesTwo.ADMIN */;
