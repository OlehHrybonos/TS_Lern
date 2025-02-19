class User4 {
    _login!: string;
    password!: string;

    set login(l){
        this._login = 'user-' +1;
    }

    get login() {
        return this._login ;
    }
}

const user4 = new User4();
user4.login = 'myLogin';




interface Iloger {
    log(... args: any[]): void;
    error(...args: any[]): void;
}

class Looger implements Iloger{
    log(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    error(...args: any[]): void {
        throw new Error("Method not implemented.");
    }
    
}


interface Payble{
    pay(paymentId:number):void;
    price?:number;
}

interface Ideliteble{
    delete(): void;
}


class User5 implements Payble {
    pay(paymentId: number | string): void {
        throw new Error("Method not implemented.");
    }
    price?: number | undefined;


}




