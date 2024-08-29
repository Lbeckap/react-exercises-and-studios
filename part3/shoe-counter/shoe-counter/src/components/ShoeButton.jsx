import { useState } from "react";

export default function ShoeButton() {
    const [shoeCount, setShoeCount] = useState(0);

    const handleClick = () => {  //event handler for the onClick event
        setShoeCount(shoeCount + 1);
    }

    return (
        <div>
            <h1>{shoeCount} shoes have come down the line!</h1>
            <button onClick={handleClick}>Add a shoe!</button>
        </div>
    );
}