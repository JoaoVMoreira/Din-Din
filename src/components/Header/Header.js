import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import { AiFillPlusSquare } from "react-icons/ai"
import { FaSearchDollar } from "react-icons/fa"
import { FaRegChartBar } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { FaSignOutAlt } from "react-icons/fa"

function Header(){
    const { Deslogar } = useContext(AuthContext)

    function DeslogarUser(){
        Deslogar()
    }
    return(
        <div className='sidebar'>
            <div className='menu'>
                <Link><AiFillHome /><p>Home</p></Link>
                <Link to='/dashboard'><AiFillPlusSquare /><p>Cadastro</p></Link>
                <Link to='/consulta'><FaSearchDollar /><p>Consulta</p></Link>
                <Link to='/investimento'><FaRegChartBar /><p>Investir</p></Link>
            </div>
            <button onClick={DeslogarUser}><FaSignOutAlt /></button>
        </div>
            
    )
}

export default Header