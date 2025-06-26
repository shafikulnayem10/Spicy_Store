
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="w-full p-4"> 
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(bannerpic.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Chunnu Spicy Store 🌶️</h1>
      <p className="mb-5">
        Your one-stop shop for all things flavorful.
      </p>
      <Link to="/buy" className="btn mb-5 font-sans btn-info">
        🛒 Buy Spices Now
      </Link>
    </div>
  </div>
</div>
      
     
    </div>
  )
}
