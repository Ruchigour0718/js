function getName(name){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('inside settime out');
            resolve(name)
        },2000)
    })
}
function getHobbies(name){
    return new Promise((resolve,request) =>{
        setTimeout(() =>{
            console.log('Inside hobby settimeout');
            resolve(['cricket','dancing','singing']);
        },1000)
    })
}
// getName('sonam')
// .then(nm =>getHobbies(nm))
// .then(hobby =>console.log(hobby))

async function showHobby () {
     const nm  =await getName('Sonam')
     const hobby = await getHobbies(nm)
     console.log(hobby);
}
showHobby()
