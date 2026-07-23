// LeanBuild App Logik

let currentDay = 0;


const weekPlan = [

    {
        day: "Montag",

        meals: {

            breakfast:
            "Skyr-Hafer-Bowl mit Banane, Beeren und Mandeln",

            lunch:
            "Puten-Vollkorn-Wrap mit Gemüse und Hüttenkäse",

            dinner:
            "Hähnchen-Reis-Gemüse-Pfanne"

        }

    },


    {
        day: "Dienstag",

        meals: {

            breakfast:
            "Eier mit Vollkornbrot und Obst",

            lunch:
            "Linsen-Hüttenkäse-Bowl",

            dinner:
            "Rinderhack mit Kartoffeln und Gemüse"

        }

    },


    {
        day: "Mittwoch",

        meals: {

            breakfast:
            "Overnight Oats mit Skyr",

            lunch:
            "Hähnchen-Sandwich",

            dinner:
            "Puten-Curry mit Reis"

        }

    }


];



function updateDay(){

    const day =
        weekPlan[currentDay];


    document.getElementById("dayTitle")
        .textContent =
        day.day;


    const meals =
        document.querySelectorAll(".meal-card");


    meals[0]
        .querySelector("p")
        .textContent =
        day.meals.breakfast;


    meals[1]
        .querySelector("p")
        .textContent =
        day.meals.lunch;


    meals[2]
        .querySelector("p")
        .textContent =
        day.meals.dinner;

}



document
.getElementById("nextDay")
.addEventListener(
    "click",
    () => {

        currentDay++;

        if(currentDay >= weekPlan.length){

            currentDay = 0;

        }

        updateDay();

    }
);



document
.getElementById("previousDay")
.addEventListener(
    "click",
    () => {


        currentDay--;


        if(currentDay < 0){

            currentDay =
                weekPlan.length - 1;

        }


        updateDay();


    }
);



// Start

updateDay();
