class User {
    name1!: string;
    age1!: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(ageOrName?: string | number, age?:number) {
        if (typeof ageOrName === 'string'){
            this.name1 = ageOrName; 
        } else if (typeof ageOrName === 'number'){
            this.age1 = ageOrName;
        }
    }
}

const user1 = new User('Oleh');
const user2 = new User();
const user3 = new User(33);

//Practic//

enum PaymentStatus{
    Holded,
    Processd,
    Revsrsed
}

class Payment{
    id!: number; 
    status!:PaymentStatus;
    createdAt!: Date;
    updatedAT!: Date;

    constructor(id: number){
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

    getPaymentLife():number {
        return new Date().getTime() - this.createdAt.getTime();
    } 
    
    unholdPayment() {
        if(this.status == PaymentStatus.Processd){
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