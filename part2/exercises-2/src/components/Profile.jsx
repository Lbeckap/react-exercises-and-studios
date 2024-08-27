import './styles.css';
import Button from './Button';
import Oceans from './oceans.json';

function Profile() {
  const listItems = Oceans.map((ocean) => {
    return (
      <div
        key={ocean.id}
        className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}
      >
        <h1>{ocean.name}</h1>
        <img src={ocean.image} alt={ocean.name} className='img' />
        <h3>Fun Facts:</h3>
        <ol>
          <li>{ocean.fact1}</li>
          <li>{ocean.fact2}</li>
          <li>{ocean.fact3}</li>
        </ol>
        <Button />
      </div>
    );
  }); 

  return <ul>{listItems}</ul>;
}

export default Profile;
