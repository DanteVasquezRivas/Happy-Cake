import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Routes, Route } from 'react-router'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Contacto from './views/Contacto'

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
    </div>
  )
}

export default App
