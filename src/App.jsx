import Navbar from './Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Colors from './Pages/Colors'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'


function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/colors' element={<Colors/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      
    </div>
  )
}

export default App
