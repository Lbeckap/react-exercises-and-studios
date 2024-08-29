import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.players.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  let players = data.players;
  let singlePlayer = players[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{singlePlayer.player} by {singlePlayer.author}
      </h2>
      <img src={singlePlayer.photoUrl} alt={singlePlayer.alt} height="300px"/>
    </div>
  );
}
