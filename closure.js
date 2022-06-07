let commom='JS';
function a()
{
    let a=999;
    let commom='JavaScript';
    console.log(a);
    function b()
    {
        // let a=9;
    let commom='Java';
        console.log(a);
        console.log(commom);
    }
    b();
}

a();

//when we return function then not just it's body is returned but it's closure will also be returned along with function body
//so that returned function can still access parent's lexical environment even after parent's execution context is not inside 
//memory

//demonstration

function transaction()
{
    let amount=500;
    function send()
    {
       console.log("sending amount "+amount);
    }
    return send;
}

let ret=transaction();
ret();