const Meal = require('./Meal');
const prepareMeal = require('./PrepareMeal')

const customerPatienceMs = 1000;


let meal2 = new Meal('Sinigang', 1000);
let meal3 = new Meal('Paksiw', 500);

let promise1 = new Promise((resolve, reject) =>{
    let meal = new Meal('Adobo', 500);

    if(meal.cookingTime < customerPatienceMs){
        prepareMeal(meal);
        resolve('Meal Served!');
    }else{
        reject('Darn. Customer left!');
    }
})

promise1.then((message) => {
    console.log('Congratulations! ' + message);
}).catch((message) => {
    console.log('Sorry. ' + message);
})




