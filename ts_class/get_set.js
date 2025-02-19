"use strict";
class User4 {
    set login(l) {
        this._login = 'user-' + 1;
    }
    get login() {
        return this._login;
    }
}
const user4 = new User4();
user4.login = 'myLogin';
class Looger {
    log(...args) {
        throw new Error("Method not implemented.");
    }
    error(...args) {
        throw new Error("Method not implemented.");
    }
}
class User5 {
    pay(paymentId) {
        throw new Error("Method not implemented.");
    }
}
