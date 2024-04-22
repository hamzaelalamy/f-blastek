import './App.css'
import LoginForm from './components/common/LoginForm'
import Header from './components/common/Header'
//import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout'
function App() {

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
