const people = [
  {
    name: "ruchi",
    age: 20,
    position: "senior developer"
  },
  {
    name: "aarti",
    age: 25,
    position: "senior react js developer"
  },
  {
    name: "roshni",
    age: 26,
    positon: "senior developer"
  }
];
const ages = people.map((person) => {
  // console.log(person);
  return person.age * 2;
});
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20
  };
});
console.log(newPeople);

const names  = people.map((person) => <h2>${person.name}</h2>);
const result = document.querySelector("result");
result.innerHTML = names.join("");
