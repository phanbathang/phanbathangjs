
//----------Toán tử ba ngôi
const x = 1000;
let result;

if (x < 1000) {
    result = "nho hon 1000";
} else {
    result = "lon hon hoac bang 1000";
}

//-->Compact
const x =1000;
const result = (x < 1000) ? "nho hon 1000" : "lon hon hoac bang 1000";


//----------Shorthand Evaluated
let variable2;
if(variable1 !== null || variable1 !== undefined || variable1 !== '') {
    variable2 = variable1;
} else {
    variable2 = " ";
}

//-->Compact
const variable2 = variable1 || " ";


//----------Variable declaration – If Comparison
let x;
let y;
let z=5;

//-->Compact
let x,y,z = 5;

if (isTurnOn === true)
//-->Compact
if(isTurnOn)


//----------For loop – For loop with decimal base
for (let i = 0; i < sampleArray.lenghth; i++)

//-->Compact
for(let item in sampleArray)

for(let i = 0; i < 100000; i++){}
//-->Compact
for(let i=0; i < 1e5; i++){}


//----------Object property
const x = 1; y = 2;
const obj = {x : x , y : y};

//-->Compact
const x = 1; y = 2;
const obj = {x,y};


//----------Rút gọn định nghĩa function
function sayHello(name) {
    console.log('Hello' , name);
}

setTimeout(function() {
    console.log('Loaded')
}, 3000);

list.forEach(function(item) {
    console.log(item);
});

//-->Compact
sayHello = name => console.log('Hello' , name);

setTimeout(() => console.log('Loaded'), 3000);

list.forEach(item => console.log(item));


//----------Implicit return (ẩn return đi bằng arrow function)
function a(b) {
    return b * 4;
}

//-->Compact
a = b => b * 4;


//----------Set default value for parameter in function
function getValue(a, b, c) {
    if(a === undefined) {
        a = 4;
    }

    if(b === undefined) {
        b = 5;
    }

    return a * b + c;
}

//-->Compact
getValue = (a, b = 4; c = 5) => (a * b + c);


//----------Template list
const welcome = 'You have logged in as' + first + ' ' + last + '.'

//-->Compact
const welcome = `You have logged in as ${first} ${last} .`;

const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
    + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
    + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
    + 'veniam, quis nostrud exerciation ullamco laboris\n\t'
    + 'nisi ut aliquid ex ea commodo consequat. Duis aute\n\t'
    + 'irure dolor in reprehenderit in voluptate veliit esse.\n\t'

//-->Compact
const lorem = `Lorem ipsum dolor sit amet, consectetur
    adipisicing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exerciation ullamco laboris
    nisi ut aliquid ex ea commodo consequat. Duis aute'
    irure dolor in reprehenderit in voluptate veliit esse.`


//----------Destructuring Assignment	
const action = require('lib/action')
const service = require('lib/service')

const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controller = this.props.controller;
const componet = this.props.componet;

//-->Compact
import { action, service } from 'lib';
const { form, errors, entity, controller, componet } = this.props;


//----------Spead Operator
// joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);

//cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()

//-->Compact
// joining arrays
const odd = [1, 3, 5];
const nums = [2, 4, 6, ...odd];

//cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = [...arr];

//-->Compact
const odd = [1, 3, 5];
const nums = [2, ...odd, 4, 6];


//----------Constraint Param
function sample(param1) {
    if(param === undefined) {
        throw new Error('Thieu tham so!');
    }
    return param1;
}

//-->Compact
mandatory = () => { throw new Error('Thieu tham so!'); }
sample = (param1 = mandatory()) => param1


//----------Find() in arrays
const empployees = [
    { name: 'Emp A', age: 25 },
    { name: 'Emp B', age: 28 },
    { name: 'Emp C', age: 35 }
]

function findEmp(name) {
    for(let i = 0; i<empployees.length; i++) {
        if(empployees[i].name === name) {
            return empployees[i];
        }
    }
}

const name = 'Emp A'
emp = findEmp(name)

//-->Compact 
const name = 'Emp A'
emp = empployees.find(item => item.name === name)


//----------Object[key]
function validate(fullName) {
    if(!fullName.firstName)
      return false;
    if(!fullName.lastName)
      return false;
    return true;
}
console.log(validate({firstName:'Duy', lastName:'Buffet'}));

const rule = {
    firstName: {
        required:true
    },
    lastName: {
        required:true
    }
}

const validate = (rule, value) => {
    for(prop in rule) {
        if(rule[prop].required) {
            if(!values[prop]) {
                return false;
            }
        }
    }
    return true;
}
console.log(validate(rule, {firstName:'Duy'}));
console.log(validate(rule, {firstName:'Duy', lastName:'Buffet'}));


//----------Bitwise NOT double
Math.floor(6.9) === 6

//-->Compact
~~6.9 === 6