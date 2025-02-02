// Ingredients Object - You can add more ingredients here as needed
const ingredientsList = {
    pasta: "Pasta",
    egg: "Egg",
    cheese: "Cheese",
    bacon: "Bacon",
    garlic: "Garlic",
    broccoli: "Broccoli",
    carrot: "Carrot",
    tofu: "Tofu",
    soySauce: "Soy Sauce",
    chicken: "Chicken",
    onion: "Onion",
    chickenBroth: "Chicken Broth",
    tomato: "Tomato",
    basil: "Basil",
    oliveOil: "Olive Oil",

};

// Recipe Object - You can add more recipes as needed
const recipes = [
    {
        name: "Pasta Carbonara",
        ingredients: ["pasta", "egg", "cheese", "bacon", "garlic"]
    },
    {
        name: "Veggie Stir Fry",
        ingredients: ["broccoli", "carrot", "tofu", "soySauce", "garlic"]
    },
    {
        name: "Chicken Soup",
        ingredients: ["chicken", "carrot", "onion", "garlic", "chickenBroth"]
    },
    {
        name: "Tomato Salad",
        ingredients: ["tomato", "onion", "basil", "oliveOil", "garlic"]
    }
];

// Function to filter recipes based on the ingredients entered
function filterRecipes() {
    const input = document.querySelector("input[type='text']").value.toLowerCase();
    const inputIngredients = input.split(",").map(item => item.trim()); // Splitting input into individual ingredients

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.ingredients.some(ingredient => inputIngredients.includes(ingredient));
    });

    displayRecipes(filteredRecipes);
}

// Function to display filtered recipes on the page
function displayRecipes(filteredRecipes) {
    const resultSection = document.querySelector(".content");

    // Clear previous results
    const existingResults = resultSection.querySelector(".results");
    if (existingResults) {
        existingResults.remove();
    }

    const resultsDiv = document.createElement("div");
    resultsDiv.classList.add("results");

    if (filteredRecipes.length === 0) {
        resultsDiv.innerHTML = "<p>No recipes found!</p>";
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement("p");
            const recipeLink = document.createElement("a");
            recipeLink.href = `recipe.html?recipe=${encodeURIComponent(recipe.name)}`;
            recipeLink.textContent = recipe.name;
            recipeElement.appendChild(recipeLink);
            resultsDiv.appendChild(recipeElement);
        });
    }

    resultSection.appendChild(resultsDiv);
}

// Listen for input change and trigger filter function
document.querySelector("input[type='text']").addEventListener("input", filterRecipes);
