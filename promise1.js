const promiseObj1 = new Promise((resolve,reject) =>{
    let req = false;
    if(req==true){
resolve('request success')                                                                                                                                                                                                                                                                                                                                                                    
    }
    else{
        reject('request rejected')
    }
});
promiseObj1.then(
 (value) =>{console.log(value)},
).catch((error) =>{console.log(error)})