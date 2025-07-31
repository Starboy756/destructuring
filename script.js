//extracts values from array or object
//[] = to perform array destructuring
//{} = to perform object destructuring

// Example 1 swapping values

let a = 1;
let b = 2;
//left destructuring , right creating new array
 [a,b] = [b,a]

 console.log(a)
 console.log(b)

 //example 2 swapping elements in array

 let colors = ["red","green","blue","black","white"];

 [colors[0],colors[2]] = [colors[2],colors[0]];

 console.log(colors);

 //example 3 assign array elements to variables

const [color1,color2,color3,...ecolors] = colors;

console.log(color1)
console.log(color2)
console.log(color3)
console.log(ecolors);

//example 4 EXTRACT VALUES FROM OBJECTS

//example 5 destructuring in function parameter

function displayPerson(firstName,lastName,age,job){
    console.log(`First Name: ${firstName}`)
    console.log(`Last Name: ${lastName}`)
    console.log(`Age: ${age}`)
    console.log(`Job: ${job}`)
}



const person1 = {
    firstName : "spoon",
    lastName : "fork",
    age : 31,
    job : "cook"

}
const person2 = {
    firstName : "spoonss2",
    lastName : "forksss2",
    age : 312,

}

const {firstName,lastName,age,job = "unemplyed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

displayPerson(person1);