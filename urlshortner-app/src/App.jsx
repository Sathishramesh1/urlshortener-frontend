import { lazy, useState ,Suspense} from 'react'

import './App.css'
import Home from './Components/Home'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom'
// import Login from './Pages/Login.jsx'
import SignUp from './Pages/Register.jsx'
import AllUrl from './Pages/AllUrl.jsx'
import ActivationPage from './Pages/ActivationPage.jsx'
import { useContext } from 'react'
import { NameContext } from './Context/context.jsx'
import { BeatLoader } from 'react-spinners'
import Daily from './Pages/Daily.jsx'
import Monthly from './Pages/Monthly.jsx'
import Forget from './Pages/Forget.jsx'
import { ResetTvSharp } from '@mui/icons-material'
import Reset from './Pages/Reset.jsx'

const Login=lazy(() => import('./Pages/Login.jsx'));


function App() {
  
 const {currentUser}=useContext(NameContext)

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
          <Route exact path='/' element={<Suspense fallback={<div>
            <BeatLoader
  color="#36d7b7"
  size={35}
/>
          </div>}><Login/> </Suspense>}/>
          <Route path='/register' element={<SignUp/>} />
          <Route path='/home' element={currentUser.token? (<Home/>) :(<Navigate to='/'></Navigate>)}/>
          <Route path='/allurl' element={<AllUrl/>}/>
          <Route path='/daily' element={<Daily/>}/>
          <Route path='/monthly' element={<Monthly/>}/>
          
          <Route path='/activate/:activationKey' element={<ActivationPage/>}/> 
          <Route path='/forget' element={<Forget/>}/>
          <Route path='/reset/:resetToken' element={<Reset/>}/>
        </Routes>
      </BrowserRouter>
      </div>
       </>
  )
}

export default App
