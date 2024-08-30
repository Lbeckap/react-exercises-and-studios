import { useState } from 'react';
import './App.css'
import BoardAssignment from './components/BoardAssignment.jsx';
import StatusChange from './components/StatusChange.jsx';
import RecipeDisplay from './components/Recipe.jsx'; 

function App() {

  return (
    <>
      <div className="App">
        <RecipeDisplay />
        <div className="recipePhotoBlock">
          <BoardAssignment />
          <StatusChange />
        </div>
      </div>
    </>
  )
}

export default App
