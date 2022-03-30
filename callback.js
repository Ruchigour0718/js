const getRollno = () => {
  setTimeout(() => {
    console.log("get api");
    let rollno = [1, 2, 3, 4, 5];
    console.log(rollno);

    setTimeout(() => {
      const biodata = {
        name: "ruchi",
        age: 29,
      };
      console.log(`My  name is ${biodata.name} and I am ${biodata.age} years old`);

setTimeout(() =>{
    biodata.gender ='male';
    console.log(`my nameis ${biodata.name} and my age is ${biodata.age} years old .gender is ${biodata.gender}`);
},2000,biodata.name)
},2000, rollno [1]);
}, 2000);
};
getRollno();
