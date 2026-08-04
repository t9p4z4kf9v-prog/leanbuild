let currentDay = 0;
let mealData = null;


async function loadMealData() {

    const response = await fetch("data/week1.json");

    mealData = await response.json();

    updateDay();

}



function updateDay() {

    if (!mealData) return;


    const day = mealData.days[currentDay];


    document.getElementById("dayTitle").textContent =
        day.day;



    const cards =
        document.querySelectorAll(".meal-card");



    day.meals.forEach((meal, index) => {


        cards[index]
        .querySelector("h3")
        .textContent =
        meal.name;



        cards[index]
        .querySelector("p")
        .textContent =
        `${meal.calories} kcal | ${meal.protein} g Protein`;

    });


}




function openMeal(index) {


    const meal =
    mealData.days[currentDay].meals[index];



    document.getElementById("mealDetail")
    .classList.remove("hidden");



    document.getElementById("detailTitle")
    .textContent =
    meal.name;



    document.getElementById("detailMacros")
    .textContent =
    `${meal.calories} kcal | Protein: ${meal.protein} g | Kohlenhydrate: ${meal.carbs} g | Fett: ${meal.fat} g`;



    const ingredients =
    document.getElementById("detailIngredients");


    ingredients.innerHTML = "";



    meal.ingredients.forEach(item => {


        const li =
        document.createElement("li");


        li.textContent = item;


        ingredients.appendChild(li);


    });




    const preparation =
    document.getElementById("detailPreparation");


    preparation.innerHTML = "";



    meal.preparation.forEach(step => {


        const li =
        document.createElement("li");


        li.textContent = step;


        preparation.appendChild(li);


    });


}




function closeMeal() {


    document.getElementById("mealDetail")
    .classList.add("hidden");


}




document
.getElementById("nextDay")
.addEventListener(
"click",
()=>{


currentDay++;


if(currentDay >= mealData.days.length){

currentDay = 0;

}


updateDay();


});




document
.getElementById("previousDay")
.addEventListener(
"click",
()=>{


currentDay--;


if(currentDay < 0){

currentDay = mealData.days.length - 1;

}


updateDay();


});





loadMealData();





if ("serviceWorker" in navigator) {


navigator.serviceWorker.register(
"service-worker.js"
);


}
