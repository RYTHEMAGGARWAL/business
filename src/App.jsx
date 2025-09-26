import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import JagatStore from './Components/JagatStore'
import Cart from './Components/Cart'
import FirstContainer from './Components/FirstContainer'
import PaanCorner from './Components/PaanCorner'
import Login from './Components/Login'
import Pharmacy from './Components/Pharmacy'
import BabyCare from './Components/BabyCare'
import PetCare from './Components/PetCare'
import CartProvider from './Components/CartContext'
import DairyBreadEggs from './Components/DairyBreadEggs'
import MasalaOil from './Components/MasalaOil'


const App = () => {
  return (
    <div>
     <CartProvider>
    <Navbar/>
    
    <Routes>
   
    <Route path='/' element={<FirstContainer/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/Cart' element={<Cart/>} />
    <Route path='/PaanCorner' element={<PaanCorner/>} />
    <Route path='/Pharmacy' element={<Pharmacy/>}/>
    <Route path='/PetCare' element={<PetCare/>}/>
    <Route path='/BabyCare' element={<BabyCare/>}/>
    <Route path='/DairyBreadEggs' element={<DairyBreadEggs/>}/>
    <Route path='/MasalaOil' element={<MasalaOil/>}/>
    </Routes>
    </CartProvider>
    </div>
  )
}

export default App