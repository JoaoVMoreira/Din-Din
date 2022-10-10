import { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import './Dashboard.css'

import Header from "../../components/Header/Header"
import HeaderTop from "../../components/HeaderTop/HeaderTop"

function Dashboard() {

    const { CadastraItens} = useContext(AuthContext)

    const [titulo , setTitulo] = useState('')
    const [valor, setValor] = useState()
    const [tipo, setTipo] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')

    function Cadastra(){
        CadastraItens(titulo, valor, tipo, categoria, descricao)
        setTitulo('')
        setValor('')
        setTipo('')
        setCategoria('')
        setDescricao('')
    }  

    return (
        
        <div>
            <div>
                <HeaderTop/>
                <Header />
            </div>
            <div className="content">
                <div className="title">
                    <h1>Cadastro</h1>
                </div>
                <div className="form">
                    <div className="titulo">
                        <input placeholder="     Titulo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
                    </div>
                    <div className="valor-tipo">
                        <input placeholder="     Valor" value={valor} onChange={(e)=>setValor(e.target.value)}/>
                        <select name="tipo" value={tipo} onChange={(e)=>setTipo(e.target.value)}>
                            <option>Tipo</option>
                            <option>Ganho</option>
                            <option>Gasto</option>
                        </select>
                    </div>
                    <div className="categoria">
                        <select name='categoria' value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
                            <option>Categoria</option>
                            <option>Lazer</option>
                            <option>Lazer</option>
                            <option>Lazer</option>
                        </select>
                    </div>
                    <div className="descricao">
                        <input placeholder="     Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </div> 
                </div>
                <div className="enviar">
                    <button onClick={Cadastra}>Registrar movimentação</button>
                </div> 
            </div>
        </div>
    )
}

export default Dashboard