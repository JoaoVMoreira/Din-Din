import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

import "./login.css"

function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const { LogarUser } = useContext(AuthContext)
    
    function Logar(){
        LogarUser(email, senha)
    }

    return(
        <div className='conteiner'>
            <div className='box'>
                    <img src={require('../../Medias/logo-principal.png')}/>
                    <h1>Faça login em sua conta</h1>
                    <input placeholder='    E-mail' type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <input placeholder='    Senha' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br/>
                    <button onClick={Logar}>Entrar</button>
                    <Link to='/cadastro'>Cadastrar-se</Link>
            </div>
        </div>
    )
}

export default Login