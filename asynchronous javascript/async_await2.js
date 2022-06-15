const makeRequest=(url)=>{
   return new Promise((resolve,reject)=>{
    if(url.toLowerCase()=='google')
    {
     resolve('Response From google');
    }
    else{
     reject('we can talk only to google!');
    }
   })
}

async function doSomething(url){
    try{
        console.log("trying to reach "+url);
        const response=await makeRequest(url);
        console.log('we have response now.');
        console.log('respose: '+response);
    }catch(err){
        console.log(err);
    }
}

doSomething('google');
doSomething('facebook');