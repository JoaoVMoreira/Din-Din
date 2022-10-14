import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Dashboard from "../Pages/Dashboard";
import Consulta from "../Pages/Consulta";
import AuthProvider from '../contexts/auth'
import RouteWrapper from "./Route";
import Investimento from "../Pages/Investimento";


export default function RoutesApp(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouteWrapper ComponenteLogado={<Dashboard/>} ComponenteInicial={<Login/>}/>}/>
                    <Route path="/cadastro" element={<RouteWrapper ComponenteLogado={<Dashboard />} ComponenteInicial={<Cadastro />} />} />
                    <Route path="/dashboard" element={<RouteWrapper ComponenteLogado={<Dashboard />} ComponenteInicial={<Login />} IsPrivate />} />
                    <Route path="/consulta" element={<RouteWrapper ComponenteLogado={<Consulta/>} ComponenteInicial={<Login/>} IsPrivate/>}/>
                    <Route path="/investimento" element={<RouteWrapper ComponenteLogado={<Investimento />} ComponenteInicial={<Login />} IsPrivate />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}