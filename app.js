// LeanBuild App 
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

    document.getElementById("dayTitle").textContent = day.day;

    const mealCards = document.querySelectorAll(".meal-card");

    mealCards[0].querySelector("h3").textContent =
        day.meals[0].name;

    mealCards[0].querySelector("p").textContent =
        day.meals[0].ingredients.join(", ");

    mealCards[1].querySelector("h3").textContent =
        day.meals[1].name;

    mealCards[1].querySelector("p").textContent =
        day.meals[1].ingredients.join(", ");

    mealCards[2].querySelector("h3").textContent =
        day.meals[2].name;

    mealCards[2].querySelector("p").textContent =
        day.meals[2].ingredients.join(", ");
}

document.getElementById("nextDay").addEventListener("click", () => {

    if (!mealData) return;

    currentDay++;

    if (currentDay >= mealData.days.length) {
        currentDay = 0;
    }

    updateDay();
});

document.getElementById("previousDay").addEventListener("click", () => {

    if (!mealData) return;

    currentDay--;

    if (currentDay < 0) {
        currentDay = mealData.days.length - 1;
    }

    updateDay();
});

loadMealData();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js");
}
