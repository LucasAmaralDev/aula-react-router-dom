import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Sobre } from "./Pages/Sobre"
import { Contato } from "./Pages/Contato"
import { ErroLogin } from "./Pages/ErroLogin"

export function Navigations() {
    return (
        <BrowserRouter >
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path='/erroLogin' element={<ErroLogin />} />
            </Routes>
        </BrowserRouter>
    )
}