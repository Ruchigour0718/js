const pobj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    resolve(roll_no);
    // reject('Error while communicating');
  }, 2000);
});
const getBiodata = (indexdata) =>{
  
    return new Promise ((resolve,reject) =>{

        setTimeout((indexdata) =>{
            let biodata ={
                name:'Ruchi',
                age:26,
            }
           resolve(`My roll no is ${indexdata}  my name is ${biodata.name} my age is ${biodata.age}`)
    
        },2000 ,indexdata)
    })
}
//promise consume
pobj1.then((rollno) =>{
    console.log(rollno);
    getBiodata(rollno[1].then((abc) =>{
console.log(abc);
    })
    )
} ).catch((error) =>  {
    console.log(error);
})
