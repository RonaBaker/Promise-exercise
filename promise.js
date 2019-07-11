function greaterThenTen(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number > 10){
                resolve();
            }
            else{
                reject("Error: ");
            }
        }, 500);
    });
}

let num = 15;
//let num = 5;

greaterThenTen(num).then(() =>{
    console.log(num + " is greater than 10");
}).catch((message) => {
    console.log(message + "num is not greater than 10");
});

