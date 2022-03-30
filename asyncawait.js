// synchronous
// console.log("i");
// console.log("eat");
// console.log("icecream");
// console.log("with");
// console.log("a");
// console.log("spoon");

//asynchronous
console.log("I");
console.log("eat");
setTimeout(() => {
  console.log("icecream with");
},4000);
console.log("spoon");
console.log("a");

// call function

// const one = () =>{
//     console.log('step one to complete first function');

// }
// const two = () =>{
//     console.log('step two to call another funciton');
// }
// one();
// two();



// call back function
// function one(call_two){
//     call_two()
//     console.log("step 1");
//     // call_two()

// }
// function two() {
//     console.log('step 2');
// }

// one(two);

//