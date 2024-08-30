import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{
      label: 'dessert',
      value: 'dessert',
   }, 
   {
      label: 'baking',
      value: 'baking',
   }, 
   {
      label: 'peaches',
      value: 'peaches',
   }];

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {console.log(boards.length)}
         {boards.map((board, index) => 
            <option value={board.value} key={index}>{board.value}</option>
         )}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
