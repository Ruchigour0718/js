const promiseObj1 = new Promise((resolve,request) =>{
    let num = 10;
    resolve(num)
}).then(
    (value) =>{console.log(value);
    return value + 10
    }
).then(
    (value) =>{console.log(value);
    
    }
)