const arr=[10,20,30,40,50,60,70,80];


//map method returns new array from calling function for every array element
const newarr=arr.map((item)=>{
   return item*2;
});
console.log(arr);
console.log(newarr);

//filter method return new array with elements that pass specified condition provided by function

const fArr=arr.filter((item)=> item<50);

console.log("Filtered Array "+fArr);

//reduce function reduce array to one element it returns a single value

const total=arr.reduce((a,b)=>{return a+b},0);
console.log("Total: "+total);

console.log(arr.map(x=>x*4));

function table(n)
{
   const base=[1,2,3,4,5,6,7,8,9,10];
   return base.map(x=>x*n);
}

console.log(table(17));
console.log(table(7));
console.log(table(10));
console.log(table(22));
