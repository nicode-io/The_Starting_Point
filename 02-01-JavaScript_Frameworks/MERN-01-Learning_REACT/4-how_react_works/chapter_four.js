
//  Part one - Basic of REACT structure
    const dish = React.createElement("h1", null, "Baked Salmon")
    const dessert = React.createElement("h2", null, "Peanut cake")
    const ingredients = [
        "2 kg salmon",
        "5 sprigs fresh rosemary",
        "2 tablespoons olive oil",
        "2 small lemons",
        "1 teaspoon kosher salt",
        "4 cloves of chopped garlic"
    ] 
    const instructions = [
        "Preheat the oven to 180°C",
        "Lightly coat aluminum foil with oil",
        "Place salmon on foil",
        "Cover with rosemary, sliced lemons, chopped garlic",
        "Remove from oven"
    ]
    const recipe = 
        React.createElement(
            "section",
            { id: "baked-salmon"},
            React.createElement("h1", null, "Baked salmon"),
            React.createElement(
            "ul",
            { className: "ingredients" },
            ingredients.map((ingredient, i) => 
                React.createElement("li", { key: i }, ingredient)
            )
        ),
        React.createElement(
            "section",
            { className: "instructions" },
            React.createElement("h2", null, "Cooking Instructions"),
            instructions.map((instruction, i) => 
                React.createElement("p", { key: i }, instruction)
                )
            )
        );

ReactDOM.render([dish, recipe, dessert], document.getElementById("root"))

// Part two - Build component through function
const secretIngredients = [
    "1 cup unsalted butter",
    "1 cup crunchy peanut butter",
    "1 cup brown sugar",
    "1 cup white sugar",
    "2 eggs",
    "2,5 cups all purpose flour",
    "1 teaspoon baking powder",
    "0,5 teaspoon salt"
];
    function IngredientsList({ items }) {
        return React.createElement(
            "ul", 
            { className: "ingredients" },
            items.map((ingredient, i) => 
                React.createElement("li", { key: i }, ingredient),
            )
        );
    }
    ReactDOM.render(
        React.createElement(IngredientsList, { items: secretIngredients }, null),
        document.getElementById("root_two")
    );