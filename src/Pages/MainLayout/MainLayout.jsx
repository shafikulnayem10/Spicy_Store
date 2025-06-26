import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


export default function MainLayout() {
  return (
     <div className="min-h-screen flex flex-col bg-base-100">
      <Navbar />
      
      <main className="flex-grow p-0"> {/* Remove padding here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

