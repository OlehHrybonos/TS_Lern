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


//next lessons object//

function getFullNameObject (userEntity: { firstname:string,surname:string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
} 

const user = {
    firstname:'Oleh',
    surname:'Hrybonos',
    city:'Mykolaiv',
    age: 35,
    skills: {
        dev:true,
        devops: true
    }
}

console.log(getFullNameObject(user));

//next lessons object//

let info : {
    officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
} 


//next lessons arrey//

const skills: string[] = ['Dev' , 'DevOps'];

for (const skill of skills) {
    console.log(skill);
}


 //next lessons tuples обмежений кількістю типів//

 const skillsTwo: [number, string] = [1,'Dev'];


  //next lessons redonly массив без можливості внесення змін//

  const skillsThre: readonly [number, string] = [1,'Dev'];


    //next lessons enums //

    enum StatusCode {
        SUCCESS = 1,
        IN_PROCESS,
        FAILD
    }

    const resTwo = {
        message:'True',
        statusCode: StatusCode.SUCCESS
    };

    /*
    1 - true
    2 - false
    3 - drop
    */

function action(status : StatusCode){

}

action(StatusCode.SUCCESS);


enum Roles{
    ADMIN = 1,
    USER
}

const enum RolesTwo {
    ADMIN = 1,
    USER = 2
}

const res2 = RolesTwo.ADMIN;
