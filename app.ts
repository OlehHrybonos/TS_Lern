let a = 'oleh';

//number//
let b = 1;
let c = -10;
let d = 3.5;
let e = 10_000;

//string//
let f = 'oleh';
let g = "hrybonos";
let h = `f i n t`;

//boolean//
let s = true;
let k = false;

//next lessons//
let revenue:number = 1000;
let bonus:number = 500;

let res:number = revenue + bonus;
console.log(res);

//next lessons functions//
function getFullName (firstname: string, surname: string): string {
    return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`;
}
