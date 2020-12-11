//console.log("High");

// var personsList = ["john", "adarsh", "revanth"];
// personsList.forEach(person => console.log(person));

// var list = personsList.map(person=> "mr "+person);
// personsList[3]="harry";
// console.log(personsList);
// console.log(list);

//var numbers=[1,3,5,7,9];
// var result = numbers.map(number => number+10);
// console.log(result);

// var num = numbers.filter(array => array==5);
// console.log(num);

// var num = numbers.filter(array => array != 5);
// console.log(num);

//var numbers = [12, 14, 16, 18, 22, 24, 26];
// var major = numbers.filter(age => age >= 18);
// console.log(major);

// var minor = numbers.filter(age => age < 18);
// console.log(minor);

// function checkAge(numbers){
//    return numbers.filter(age => age >=18);
// }

// var major = checkAge(numbers);
// console.log(major);

//var friends = [{name: "john", gender: "male", age:27}, {name: "adarsh", gender:"male", age: 19}, {name:"martha", gender:"female", age:22}];
// var names = friends.map(person => person.name);
// console.log(names);

// var maleList = friends.filter( person => person.gender == "male");
// console.log(maleList);

// var femaleList = friends.map(person => {if(person.gender == "female")
// {
//     return person.name;
// }
// });
// console.log(femaleList);

// var list = friends.map(person => {
//     if(person.gender == "male"){
//         return "mr " +person.name;
//     } else {
//         return "miss " +person.name;
//     }
// });
// console.log(list

//console.log(friends);

//friends.sort((b,a) => b.age.toString().localeCompare(a.age.toString()));

//var friends = [{name: "john", gender: "male", age:27}, {name: "adarsh", gender:"male", age: 19}, {name:"martha", gender:"female", age:22}];
var friends = [
  { name: "john", gender: "male", age: 27 },
  { name: "adarsh", gender: "male", age: 19 },
  { name: "martha", gender: "female", age: 22 },
];
//var persons = friends.map(person => ({...person, designation: "completed"}));
// console.log(persons);
// console.log(friends);


// var maleList = persons.filter(person => person.gender == "male");
// console.log(maleList);
// console.log(persons);

// var sortedList = maleList.sort((a,b) => b.age-a.age);
// console.log(sortedList);
// console.log(maleList);

var persons = friends.map(person => ({...person, designation: "completed"})).filter(person => person.gender == "male").sort((a,b) => b.age-a.age)
console.log(persons);