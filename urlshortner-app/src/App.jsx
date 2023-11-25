import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import SignUp from './Pages/Register.jsx'


function App() {
  

  return (
       <>
      {/* <div className='container base'> 
      
       
       </div>  */}
       <div style={{
        display:'flex',
        flexDirection:'column',
        width:'100vw'
       }}>
       <BrowserRouter>


        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route path='/register' element={<SignUp/>} />
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </div>
       </>
  )
}

export default App
