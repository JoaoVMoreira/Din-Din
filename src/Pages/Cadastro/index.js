import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

function Cadastro() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const { cadastraUser } = useContext(AuthContext)

    function Cadastrar(){
        cadastraUser(email, senha, nome)
    }
    
    
    return (
        <div className='conteiner'>
            <div className='lateral1'>
                <img src={require('../../Medias/logo-amarelo.png')} />
            </div>
            <div className='lateral2'>
                <div className='form'>
                    <label>E-mail:</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} /><br />
                    <label>Senha:</label>
                    <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} /><br />
                    <button onClick={Cadastrar}>Entrar</button>
                    <Link to='/'>Logar</Link>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;
