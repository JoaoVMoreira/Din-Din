import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from '../contexts/auth'

export default function RouteWrapper({ComponenteLogado, ComponenteInicial, IsPrivate}){

    const {auth} = useContext(AuthContext)

    if(auth && !IsPrivate){
        <Navigate to='/dashboard'/>
    }

    if(!auth && IsPrivate){
        <Navigate to='/'/>
    }

    return auth ? ComponenteLogado : ComponenteInicial
}