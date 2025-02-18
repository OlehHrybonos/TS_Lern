"use strict";
class User {
    constructor(ageOrName, age) {
        if (typeof ageOrName === 'string') {
            this.name1 = ageOrName;
        }
        else if (typeof ageOrName === 'number') {
            this.age1 = ageOrName;
        }
    }
}
const user1 = new User('Oleh');
const user2 = new User();
const user3 = new User(33);
//Practic//
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processd"] = 1] = "Processd";
    PaymentStatus[PaymentStatus["Revsrsed"] = 2] = "Revsrsed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }
    getPaymentLife() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == PaymentStatus.Processd) {
            throw new Error('lol');
        }
        this.status = PaymentStatus.Revsrsed;
        this.updatedAT = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLife();
console.log(time);
