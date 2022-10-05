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
            <div className='lateral1'>
                <img src={require('../../Medias/logo-amarelo.png')}/>
            </div>
            <div className='lateral2'>
                <div className='form'>
                    <label>Login:</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label>Senha:</label>
                    <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br/>
                    <button onClick={Logar}>Entrar</button>
                    <Link to='/cadastro'>Cadastrar-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Login