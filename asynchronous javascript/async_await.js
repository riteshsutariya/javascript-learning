//first example
const asyncFunc=(flag)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag)
            {
                resolve('promise resolved successfully.');
            }
            else{
                reject('promise rejected due to some reason!!');
            }
        },3000)
    })
}

const doSomething=async()=>{
     console.log(await asyncFunc(10));
     console.log("code after await.");
}
console.log("Before");
doSomething();
console.log("After");


//second example 
//using fetch() which returns Promise
fetch('https://jsonplaceholder.typicode.com/users/',{method:'GET'}).then((Response)=>{
if(!Response.ok)
{
    throw new Error('Network Response is not OK!');
}
else{
  return Response.json();
}
}).then(data=>{
    return data[0];
}).then((user)=>console.log(user)).
catch((err)=>{
    console.log(err);
})

// node async_await.js