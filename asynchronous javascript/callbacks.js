//a callback is simple function that's passed as a value to another function, and will ony be executed when event occurs

//Examples: we append function to element(button)'s click,mouseHover,mouseUp,mouseDown,keyUp,keyDown event are simply call back functions
//which are executed in response to perticular event

//setTimeout 
//setTimeout acceps callback and callback function will be executed once timer expire
setTimeout(greet,2000);

function greet()
{
    console.log("Hello Guest.");
}

//setInterval accepts callback function and function will invoked at specified time interval
const id=setInterval(getTime,2000);

function getTime()
{
    const date=new Date();
    console.log(date);
}

setTimeout(()=>{
    clearInterval(id);
},10000)

