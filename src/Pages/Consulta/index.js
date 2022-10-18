import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import firebase from "../../firebaseConnection";
import './consulta.css'

function Consulta (){

    const[cadastros, setCadastros] = useState([])
    const[empty, setEmpty] = useState(false)

    const dadosCriados = firebase.firestore().collection('dados')

    useEffect(() => {
        
        LoadMovimentacao()

        return () =>{

        }
    }, [])

    async function LoadMovimentacao() {
        await dadosCriados
        .get()
        .then((snapshot)=>{
            atualizaState(snapshot)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    async function atualizaState(snapshot){
        const isEmpty = snapshot.size === 0;


        if(!isEmpty){

            let lista = []

            snapshot.forEach((doc)=>{
                lista.push({
                    id: doc.id,
                    categoria: doc.data().categoria,
                    descricao: doc.data().descricao,
                    tipo: doc.data().tipo,
                    titulo: doc.data().titulo,
                    valor: doc.data().valor,
                })
                
            })

            setCadastros(cadastros => [...cadastros, ...lista])
        }else{
            setEmpty(true)
        }
    }

    return(
        <div>
            <div>
                <HeaderTop/>
                <Header/>
            </div>
            <div className='content'>
                <div className='title'>
                    <h1>Consulta</h1>
                </div>

                {cadastros.length == 0 ? (
                    <div className='conteiner-consulta'>
                        <div className='form-sem-consulta'>
                            <p>Não ha movimentações cadastradas...</p>
                        </div>
                        <div className='btn'>
                            <Link to='/dashboard'>Cadastro</Link>
                        </div>
                    </div>
                ) : (
                    <div className='conteiner-consulta'>
                        <div className='form-sem-consulta'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Tipo
                                        </th>
                                        <th>
                                            Titulo
                                        </th>
                                        <th>
                                            Valor
                                        </th>
                                        <th>
                                            Categoria
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className='contentudoTabela'>
                                    {cadastros.map((item,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <span style={{ color: item.tipo === 'Ganho' ? '#21E758' : '#D00A0D'}}>
                                                        {item.tipo}
                                                    </span>
                                                </td>
                                                <td>{item.titulo}</td>
                                                <td>{item.valor}</td>
                                                <td>{item.categoria}</td>
                                            </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className='btn'>
                            <Link to='/dashboard'>Cadastro</Link>
                        </div>
                    </div>
                )} 
            </div>

            
                
        </div>
    )
}

export default Consulta;