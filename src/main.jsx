import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './components/404.jsx'
import App1 from './components/App1.jsx'
import Cuadricula from './components/Cuadricula.jsx'
import Home from './Home'
import CriptoPage from './components/cripto/CriptoPage'
import { UserContextProvider } from './context/UserContext'
import Perfil from './Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App1 />} >
                    <Route index element={<Home />} />
                    <Route path='perfil' element={<Perfil />} />
                </Route>
                <Route path='/criptomonedas' element={<App1 />} >
                    <Route index element={<Cuadricula />} />
                    <Route path=':id' element={<CriptoPage />} />
                </Route>
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
