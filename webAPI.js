console.log("start");
//setTimeout() is part of webAPI not javascript
setTimeout(()=>{
  console.log("after 4 seconds 1.");
},4000);
console.log("End");

//setInterval() is also part of webAPI
const id=setInterval(()=>{
  let count=0;
  console.log("hello "+(++count));
},2000);

//clearInterval() is also part of webAPI
setTimeout(()=>{
  clearInterval(id);
},8000);

//fetch() is also part of webAPI
fetch('https://jsonplaceholder.typicode.com/todos/1').then(Response=>Response.json()).then(json=>console.log(json))

//other webAPIs:

/*
1. DOM(Document Object Model)
2. Console API
3. IndexedDB
4. LocalStorage(Web Storage API)
5. GeoLocation API
6. File API
there are so many other webAPIs
*/