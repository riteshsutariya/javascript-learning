async function layer1()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('layer 1 resolved.');
        },1000)
    })
}

async function layer2()
{
    const something=await layer1();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(something+' layer 2 resolved.');
        },2000)
    })
}

async function layer3()
{
    const something=await layer2();
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(something+' layer 3 resolved.');
        },3000)
    })
}

layer3().then(resp=>console.log(resp)).catch(err=>console.error(err));