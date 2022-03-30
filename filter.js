// filter -returns a new array, can manipulate the size of new array and returns based on the certain conditon

// find -returns single instance ,returns firstmatch ,if no match then undefined

const people = [
  {
    name: "ruchi",
    age: 20,
    position: "developer"
  },
  { name: "roshi", age: 25, positon: "designer" },
  {
    name: "sonam",
    age: 24,
    positon: "react js developer"
  }
];

const youngPeople = people.filter((person) => {
  return person.age < 30;
});
console.log(youngPeople);

// want to know the position by using filter method then saw the below example
const developer = people.filter((person) => person.position === "developer");
console.log(developer);

//if no match found using filtermethod then it returns an empty array
const Seniordeveloper = people.filter(
  (item) => item.positin === "senior developer"
);
console.log(Seniordeveloper);

//find returns single instance that is find in the first search whether we would be having an more resutl according to same condition  and in the firstmatch it find it
const age = people.find((person) => person.age > 20);
console.log(age);

// what happen if find has no match

const age = people.find((person) => person.age > 45);
console.log(age);
