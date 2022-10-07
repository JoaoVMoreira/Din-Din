import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import './cadastro.css'

function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const { cadastraUser } = useContext(AuthContext)

    function Cadastrar(){
        cadastraUser(email, senha, nome)
    }
    
    
    return (
        <div className='conteiner-cadastro'>
            <div className='box-lateral'>
                
            </div>
            <div className='box-cadastro'>
                <img src={require('../../Medias/logo-principal.png')}/>
                <h1>Junte-se a nós!</h1>
                <input placeholder='   E-mail' type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <input placeholder='   Nome' type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                <input placeholder='   Senha' type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
                <button onClick={Cadastrar}>Cadastre-se</button>
                <Link to='/'>Logar</Link>
            </div>
        </div>
    )
}

export default Cadastro;
