console.log(b);   //here we will get undefined as variables declared with var allocated memory
//and initialized with special identifier undefined.

// console.log(a);   //we are trying to access variable a in it's temporal dead zone
//because variables defined with let and const are hoisted and allocated memory to seprate space
//from where we can't access variable value before it's initialized.

let a=10;

var b=20;
var b=30;   //here we'll not get error and variable b will reassign the value with 30.

// let a=99;    //here we'll get error can't redeclare block scoped variable 'a'.

const c=55;
// c=55;        //here we'll get error assignment to constant variable as we can't assign value to constant 
             //variable after initialization, and we must initialize const variables at declaration time.
