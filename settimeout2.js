console.log("line 1");

setTimeout(()=>{console.log("line 2")},0);
//callback function will stored in callback queue in browser and will called whenever timer expires 
//event loop is responsible for calling functions from callback queue and microtask queue

// event loop simply check is call stack is empty or not if call stack is idle then eventloop will pick function 
// either from microtask queue or callback queue

setTimeout(()=>{console.log("line 3")},100);
//function will stored in callback queue

setTimeout(()=>{console.log("line 4")},50);
//here also function will stored in callback queue

console.log("line 5");

//output: line 1
//	  line 5
//  	  line 2
//  	  line 4
//	  line 3 


//functions of callback queue executed whenever call stack is empty, this is the reason for line 2 executed after line 5 

