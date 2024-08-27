import receipeData from './recipe.json';

function RecipeImage() {
   return <img src={receipeData[0].recipeImage} className='recipeImage' alt={receipeData[0].name}/>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 