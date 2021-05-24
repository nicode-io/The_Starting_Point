
// RECIPES Components
  const data = [
      {
        name: "Baked Salmon",
        ingredients: [
          { name: "Salmon", amount: 1, measurement: "l lb" },
          { name: "Pine Nuts", amount: 1, measurement: "cup" },
          { name: "Butter Lettuce", amount: 2, measurement: "cups" },
          { name: "Yellow Squash", amount: 1, measurement: "med" },
          { name: "Olive Oil", amount: 0.5, measurement: "cup" },
          { name: "Garlic", amount: 3, measurement: "cloves" },
        ],
        steps: [
          "Preheat the oven to 350 degrees.",
          "Spread the olive oil around a glass baking dish.",
          "Add the salmon, garlic, and pine nuts to the dish.",
          "Bake for 15 minutes.",
          "Add the yellow squash and put back in the oven for 30 mins.",
          "Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
        ],
      },
      {
        name: "Fish Tacos",
        ingredients: [
          { name: "Whitefish", amount: 1, measurement: "l lb" },
          { name: "Cheese", amount: 1, measurement: "cup" },
          { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
          { name: "Tomatoes", amount: 2, measurement: "large" },
          { name: "Tortillas", amount: 3, measurement: "med" },
        ],
        steps: [
          "Cook the fish on the grill until hot.",
          "Place the fish on the 3 tortillas.",
          "Top them with lettuce, tomatoes, and cheese",
        ],
      },
    ];

  function Menu({title, recipes}) {
    return (
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <section className='recipes'>
          {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
          ))}
        </section>
      </article>
    );
  }

  function Recipe({ name, ingredients, steps }) {
    return (
      <article id={name.toLowerCase().replace(/ /g, '-')}>
        <h2>{name}</h2>
        <ul className='ingredients'>
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
          ))}
        </ul>
        <article className='instructions'>
          <h3>Cooking Instructions</h3>
          {steps.map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </article>
      </article>
    );
  }
  ReactDOM.render(
    <Menu recipes={data} title='Delicious Recipes' />,
    document.getElementById('root')
  );

// REACT Fragment

// Following example raise an error : Adjacent JSX elements
// JSX can render only elements wrapped in ONE tag 
// function Cat({ name }) {
//   return (
//     <h1>The cat's name is {name}</h1>
//     <p>He's good.</p>
//   );
// }

// To avoid that encapsulate through a fragment to avoid creating useless containers
// function Cat({ name }) {
//   return (
//     <React.Fragment>
//       <h1>The cat's name is {name}</h1>
//       <p>He's good.</p>
//     </React.Fragment>
//   );
// }

// And finally :
function Cat({ name }) {
  return (
    <>
      <h1>The cat's name is {name}</h1>
      <p>He's good.</p>
    </>
  );
}


ReactDOM.render(<Cat name='Jungle' />, document.getElementById('root_two'));


  