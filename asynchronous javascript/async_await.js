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