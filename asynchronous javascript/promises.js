//promise is defined as proxy for value that will eventually become available, one way to deal with asynchronous code, without getting stuck in callback hell.

//creating a new promise

const promise1=new Promise((resolve,reject)=>{
    resolve("promise-1 has been resolved.");
});

const promise2=new Promise((resolve,reject)=>{
    reject("promise-2 has been rejected!");
});

promise1.then(msg=>{
    console.log(msg)
    console.log("............");
    console.log("............");
    console.log("code to be executed after promise-1 resolve.");
    console.log("............");
    console.log("............");
}).catch(err=>
    {
        console.error(err)
        console.log("............");
        console.log("code to be executed after promise-2 rejected.");
        console.log("............");
    });

promise2.then(msg=>
    {
        console.log(msg)
        console.log("............");
        console.log("............");
        console.log("code to be executed after promise-2 resolve.");
        console.log("............");
        console.log("............");
    }).catch(err=>
        {
            console.error(err)
            console.log("............");
            console.log("code to be executed after promise-2 rejected.");
            console.log("............");
       });

console.log("............");
console.log("............");
console.log("............");
console.log("rest code...");
console.log("............");
console.log("............");
console.log("............");

/*
JS APIs using promises:
-the Battery API
-the Fetch API
-Service Workers
*/