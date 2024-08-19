import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.crazyforcrust.com/peach-pie-double-crust-or-crumble-recipe/";
    let authorPhoto = "https://secure.gravatar.com/avatar/ee59140562b910249161e8139c3ab3a2?s=222&r=g";
    let authorName = "Dorothy Kern";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Photo of Dorothy Kern" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Crazy For Crust</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>A peach pie can be made with a double crust, lattice crust, or even a crumble topping. This peach pie recipe is easy and fast and perfect!</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;