import { useState, useEffect } from "react";
import Spicy from "../Spicy/Spicy";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Spicies = () => {
  const [spices, setSpices] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState('default');

  
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  useEffect(() => {
    async function fetchSpices() {
      try {
        const response = await fetch("/public/Spicies.json");
        const data = await response.json();
        setSpices(data);
      } catch (error) {
        console.error("Failed to fetch spices:", error);
      }
    }

    fetchSpices();
  }, []);

  
  const handleCartToggle = (spicy) => {
    const exists = cart.some((item) => item.id === spicy.id);
    if (exists) {
      setCart(cart.filter((item) => item.id !== spicy.id));
      toast.warn(`${spicy.name} removed from cart`);
    } else {
      setCart([...cart, spicy]);
      toast.success(`${spicy.name} added to cart`);
    }
  };

  
  const filteredSpices = spices.filter((spice) =>
    spice.name.toLowerCase().includes(searchText.toLowerCase())
  );

  
  const sortedSpices = [...filteredSpices].sort((a, b) => {
    switch (sortBy) {
      case "id-asc":
        return a.id - b.id;
      case "id-desc":
        return b.id - a.id;
      case "price-asc":
        return parseFloat(a.price) - parseFloat(b.price);
      case "price-desc":
        return parseFloat(b.price) - parseFloat(a.price);
      default:
        return 0;
    }
  });

 
  const cartTotal = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="m-7 p-4 bg-blue-500 min-h-screen">
      
      
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search Spices..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 rounded text-black w-80"
        />
        <label className="text-white text-lg">Sort:</label>
        <select
          className="p-2 rounded text-black"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="id-asc">ID: Low to High</option>
          <option value="id-desc">ID: High to Low</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      
      <h3 className="text-3xl bg-amber-800 p-2 rounded text-white">
        Total Spices: {sortedSpices.length}
      </h3>
      <h4 className="text-xl mt-2 text-white">🛒 Cart: {cart.length} item(s)</h4>

     
      {cart.length > 0 && (
        <div className="bg-white text-black rounded p-4 mt-4 shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Items in Cart:</h2>
          <ul className="list-disc pl-5 mb-3">
            {cart.map((item) => (
              <li key={item.id}>
                <span className="font-bold">{item.name}</span> — {item.price}৳
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <p className="text-xl font-semibold text-right">
            🧾 Total Price: <span className="text-green-700">{cartTotal.toFixed(2)}৳</span>
          </p>
        </div>
      )}

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {sortedSpices.map((spicy) => (
          <Spicy
            key={spicy.id}
            spicy={spicy}
            cart={cart}
            handleCartToggle={handleCartToggle}
          />
        ))}
      </div>

    
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop />
    </div>
  );
};

export default Spicies;

