import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth'

function Header(){
    const { Deslogar } = useContext(AuthContext)

    function DeslogarUser(){
        Deslogar()
    }
    return(
        <div className='sidebar'>
            <img src={require('../Medias/logo-branco.png')}/>

            <div className='menu'>
                <Link to='/dashboard'>Cadastro</Link>
                <Link to='/consulta'>Consulta</Link>
                <Link>Investimento</Link>
                <Link>Planejamento</Link>
            </div>
                <button onClick={DeslogarUser}>Sair</button>
        </div>
    )
}

export default Header