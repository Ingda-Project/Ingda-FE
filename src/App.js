import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Header from './Header'
import MyPage from './MyPage'

/*
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
*/

function App() {
  return (
    <div>
      <Header />
      <MyPage />
    </div>
  )
}

export default App
