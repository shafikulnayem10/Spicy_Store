import Spicies from "../../Components/Spicies/Spicies";

export default function BuySpices() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">🛒 Buy Your Spices</h1>
      <p className="text-lg">
        Welcome to the masala marketplace! Browse our premium collection of spices, all packed with desi power 🌶️.
      </p>
      <Spicies></Spicies>
    </div>
  )
}
