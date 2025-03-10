import './App.css'
import {BrowserRouter , Routes , Route , } from 'react-router-dom'
import Home from './componenets/home'
import Contact from './componenets/contact'
import Aboutus from './componenets/Aboutus.tsx'
import Header from './componenets/Header.tsx'
const App: React.FC = () => {

  return ( <>
    <Header/> 
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
