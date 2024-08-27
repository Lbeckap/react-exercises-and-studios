import recipeData from './recipe.json';

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      <ol>
        {(recipeData[0].ingredients).map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ol>
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
