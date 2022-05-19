function prepareMeal(meal){

    setTimeout(() => {
        console.log('Finished cooking: ' + meal.name + ' in ' + meal.cookingTime);
    }, meal.cookingTime)

}

module.exports = prepareMeal