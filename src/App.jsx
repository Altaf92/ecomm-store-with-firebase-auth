import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/ragistration/Login'
import SignUp from './pages/ragistration/SignUp'
import { ProtectedRoute } from './protectedRoute/ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         
          <Route path='/' element={<ProtectedRoute>
            <Home />
          </ProtectedRoute>} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
