var a;              
console.log(a);     //will log undefined as no value assigned to variable a
a=90;
console.log(a);
b();
function b()
{
var a=999;
console.log(a);
c();
function c()
{
  console.log(a);
}
}

console.log(a);

/*
EXECUTION FLOW OF THIS PROGRAM:

1. MEMORY CREATION PHASE
- a will allocated memory and javascript will assign undefined identifier
- b() will allocated memory and it's body(definition) will assigned

2. EXECUTION PHASE
- line2 a's value will be logged which is undefined
- line3 a will be assigned value 90 in global execution context
- line4 a's value will be logged which is 90
- line 5 b() is called, so execution context will be created for function b

  Controll will be passed to execution context of function b
  -function b's execution context:
   1. MEMORY CREATION PHASE
   - a will allocated memory and javascript will assign undefined identifier
   - c() will allocated memory and it's body(definition) will assigned
   
   2. EXECUTION PHASE  
   - variable a will assign value 999
   - a's value will be logged which is 999
   - c() is called, so execution context will be created for function c
   
     Controll will be passed to execution context of function c
     -function c'sexecution context: 
     1. MEMORY CREATION PHASE
     - nothing to do in memory creation
     
     2. EXECUTION PHASE
     - a's value will be searched in function's current execution context and it is not in current context, 
     so it's parent's lexical environment(c's execution context) and it will find a which is having value 999
     and this value will be logged.
   c()'s execution is finished, so it's execution context will be deleted from memory.
  Controll will passed to b()'s execution context
  b()'s execition is finished, so it's execution context will be deleted from memory.
 Controll will be passed to Global Execution Context
 - line 17 a's value will be logged which is 90
 program's execution is over, so javascript will delete global execution context.
*/

/*
OUTPUT:
   undefined
   90
   999
   999 
   90
*/
