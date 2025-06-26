import './App.css'

import { Routes, Route } from 'react-router-dom'
import MainLayout from './Pages/MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import ContactUs from './Pages/ContactUs/ContactUs'
import BuySpices from './Pages/BuySpicies/BuySpicies'
import SpicyDetail from './Pages/SpicyDetails/SpicyDetails'
function App() {
  

  return (
    <>
       <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        
        <Route index element={<Home></Home>} />
        <Route path="ContactUs" element={<ContactUs></ContactUs>} />
        <Route path="buy" element={<BuySpices></BuySpices>} /> 
        <Route path="buy/:id" element={<SpicyDetail/>} />
        
      </Route>
    </Routes>
     
    </>
  )
}

export default App

