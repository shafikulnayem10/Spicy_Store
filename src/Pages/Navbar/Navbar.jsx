import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 px-4">
      <div className="flex-1 items-center flex gap-2">
      
        <img
          src="pp.jpg" 
          alt="Profile"
          className="w-15 h-15 rounded-full object-cover"
        />

        <NavLink to="/" className="btn btn-ghost text-xl">
          🌶 Spicy Store
        </NavLink>
      </div>

      <div className="flex-none gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-primary' : 'bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/ContactUs"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-primary ' : 'btn btn-sm bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  )
}


