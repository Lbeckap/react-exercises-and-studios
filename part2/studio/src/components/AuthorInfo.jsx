import recipeData from './recipe.json';

function AuthorInfo() {
  const recipeAuthor = <div>{recipeData[0].author}</div>;
  const recipeAuthorImage = <img className='authorImage' src={recipeData[0].authorImage} alt={recipeData[0].author}></img>;
  let url = recipeData[0].website;
  const recipeWebsite = <a href={url} target='_blank'>{url}</a>;

   return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 