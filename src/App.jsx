import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ContextPage from './pages/contextPage';
import CalculatorPage from './pages/calculatorPage';
import LogInPage from './pages/logInPage';
import LogOutPage from './pages/LogOutPage';
import RegisterPage from './pages/RegisterPage';
import './App.css'


export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/context' element={<ContextPage/>}/>
      <Route path='/calculator' element={<CalculatorPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LogInPage/>}/>
      <Route path='/logout' element={<LogOutPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}