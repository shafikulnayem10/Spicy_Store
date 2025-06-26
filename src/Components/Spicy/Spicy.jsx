import React from 'react';
import { useNavigate } from 'react-router-dom';

const Spicy = ({ spicy, cart, handleCartToggle }) => {
  const { id, name, image, price, description } = spicy;
  const navigate = useNavigate();

  const isInCart = cart.some((item) => item.id === id);

  const handleClick = () => {
    navigate(`/buy/${id}`);
  };

  return (
    <div >
     
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      style={{ width: '100px', height: 'auto' }}
        alt={`${name} image`}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
      
    </h2>
    <div className='text-xl'>Price: {price}</div>
    <p>Description: {description}</p>
    <div className="card-actions justify-end">
      <button className="bg-black px-2 py-1 rounded mt-2" onClick={handleClick}>
        Show Details
      </button>

      <button
        className={`ml-2 mt-2 px-3 py-1 rounded ${
          isInCart ? 'bg-red-500' : 'bg-yellow-500'
        }`}
        onClick={() => handleCartToggle(spicy)}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Spicy;
