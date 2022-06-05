const person = {
    id: 55846,
    name: 'Some Name',
    contact_no: 5555555566,
    address: {
        House_FlatNo: 'G-801',
        Apartment: 'Heaven Rivera',
        Area: 'Paradise',
        Pincode: 398001
    },
    gender: 'male',
    age: 20
}

console.log("Hello");
let str = JSON.stringify(person);
console.log(str);

console.log(person);

console.log(typeof person);
console.log(typeof person.address);
console.log(typeof person.address.Pincode);
console.log(typeof person.address.House_FlatNo);
console.log(person.address);
