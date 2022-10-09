import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import './consulta.css'

function Consulta (){

    const[cadastros, setCadastros] = useState([20])

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
            </div>

            
                {cadastros.length == 0 ? (
                <div className='form-sem-consulta'>
                    <p>Não movimentações cadastradas...</p>
                    <Link to='/dashboard'>Cadastro</Link>
                </div>

                ) : (
                    <div className='form-sem-consulta'>
                        maior que zero
                    </div>
                )}
        </div>
    )
}

export default Consulta;