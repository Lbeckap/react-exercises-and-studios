import { useState } from 'react';


const RecipeAuthor = () => {
  const authorLink =
    'https://www.crazyforcrust.com/peach-pie-double-crust-or-crumble-recipe/';
  const authorPhoto =
    'https://secure.gravatar.com/avatar/ee59140562b910249161e8139c3ab3a2?s=222&r=g';
  const authorName = 'Dorothy Kern';

  return (
    <div>
      <img
        src={authorPhoto}
        alt={authorName}
        style={{ objectFit: 'contain', borderRadius: '50%' }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    'All butter pie crust',
    '5 cups fresh or thawed frozen peaches (about 2 pounds)',
    '⅔ cup (134g) granulated sugar',
    '½ teaspoon ground cinnamon',
    '1 tablespoon lemon juice',
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Peach Pie Recipe</h1>
        <p>
          A peach pie can be made with a double crust, lattice crust, or even a
          crumble topping. This peach pie recipe is easy and fast and perfect!
        </p>
      </div>
      <div className='recipePhotoBlock'>
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="https://www.crazyforcrust.com/wp-content/uploads/2024/05/peach-pie-6-368x368.jpg" alt='Peach pie' className='imageUpdates' />;
};

export default function RecipeDisplay() {
  return (
    <div className='recipePhotoBlock'>
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
