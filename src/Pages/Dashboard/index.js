import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import './Dashboard.css'

import Header from "../../components/Header"

function Dashboard() {

    const { CadastraItens} = useContext(AuthContext)

    const [titulo , setTitulo] = useState('')
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')

    function Cadastra(){
        CadastraItens(titulo, valor, tipo, categoria, descricao)
    }  

    return (
        
        <div>
            <div>
                <Header />
            </div>
            <div className="conteudo">
                <div className="title">
                    <h1>Cadastro</h1>
                </div>
                <div className="form">
                    <div className="titulo">
                        <input placeholder="Titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
                    </div>
                    <div className="valor-tipo">
                        <input placeholder="Valor" value={valor} onChange={(e)=>setValor(e.target.value)}/>
                        <select name="tipo" value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                            <option value='0'>Selecione</option>
                            <option value='1'>Ganho</option>
                            <option value='2'>Gasto</option>
                        </select>
                    </div>
                    <div className="categoria">
                        <select name='categoria' value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                            <option>Selecione</option>
                            <option>Lazer</option>
                            <option>Lazer</option>
                            <option>Lazer</option>
                        </select>
                    </div>
                    <div className="descricao">
                        <input placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div>
                    <div className="enviar">
                        <button onClick={Cadastra}>Cadastrar</button>
                    </div>  
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard