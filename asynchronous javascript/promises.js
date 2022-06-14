//promise is defined as proxy for value that will eventually become available, one way to deal with asynchronous code, without getting stuck in callback hell.

//creating a new promise

/*
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

*/

/*
JS APIs using promises:
-the Battery API
-the Fetch API
-Service Workers
*/

console.log('part-2:');

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve('promise-3 resolved.');
    },1000);
});

const promise4=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve('promise-4 resolved');
   },5000); 
});

const promise5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise-5 resolved');
    },2000);
});

const promise6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('promise-6 rejected');
    },50);
});

//Promise.race() runs when the first of the promise you pass to is settled(resolves or rejectes), runs attached callback
//only once, with result of first promise settled
/*Promise.race([promise3,promise4,promise5,promise6]).then((msg)=>{
    console.log("race: ");
    console.log(msg);
}).catch((err)=>{
console.log("race: ");
    console.error(err);
});
*/

//Promise.all() helps you define a list of promises,and execute something when they all are resolved
/*Promise.all([promise3,promise4,promise5]).then((msg)=>{
    console.log("all: ");
    console.log(msg);
}).catch((err)=>{
    console.log("all: ");
    console.error(err);
});
*/

/*
Promise.resolve([promise3,promise4,promise5,promise6]).then((msg)=>{
    console.log("resolve: ");
    console.log(msg);
}).catch((err)=>{
    console.log("resolve: ");
    console.error(err);
});
*/