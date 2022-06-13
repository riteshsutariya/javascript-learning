//function statement : when we create function using syntax function funcName(){} then it's known as function statement

function function_statement()
{
    console.log("this is function statement.");
}

//anonymous function: function without name are known as anonymous function

var anonymous_function=function(){
    console.log("this is anonymous function.");
}

//function expression : when we pass anonymous function to variable then it's known as function expression

var function_expression=function(){
    console.log("this is function expression.");
}

//difference between function statement and function expression is that functions declared with function statement 
//can be called before declaration whereas functions declared with function expression can't be called before
//declaration 

arrow();
//arrow function
arrow=()=>{
    console.log("arrow function.");
}

//arrow functions also can't be used before declaration
console.log(typeof arrow);