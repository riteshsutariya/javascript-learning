
function attachEventListener()
{
    let count=0;
    document.getElementById("clickMe").addEventListener("click",handleClick)
    function handleClick(){
        console.log("clicked "+(++count)+" th time.");
    }
}

attachEventListener();