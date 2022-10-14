import {useContext, useEffect, useState } from 'react'
import firebase from 'firebase'
import './HeaderTop.css'
import { AuthContext } from '../../contexts/auth'

export default function HeaderTop(){

    const [totalGasto, setTotalGasto] = useState([])
    const [gasto, setGasto] = useState([])
    let valorSomado = 0

    useEffect(() => {

        async function CalculaTot() {
            await firebase.firestore().collection('dados')
                .get()
                .then((snapshot) => {
                    Soma(snapshot)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        CalculaTot()

    })

    async function Soma(snapshot) {
        let ganho = []
        let gasto = []
        snapshot.forEach((doc) => {
            if (doc.data().tipo === 'Gasto') {
                gasto.push({
                    valor: doc.data().valor
                })
            } else if (doc.data().valor === 'Ganho') {
                ganho.push({
                    valor: doc.data().valor
                })
            }
        })
        setTotalGasto(...gasto)
        MostraGasto()

    }

    function MostraGasto() {
        let tot = totalGasto.length
        let cont = 0
        console.log('ta aqui')

        while (cont < tot) {
            let totalGastoFloat = parseFloat(totalGasto[cont].valor)
            valorSomado = valorSomado + totalGastoFloat
            console.log(valorSomado)
            localStorage.setItem('gastoTot', valorSomado)
            cont = cont + 1
        }


    }

    return(
        <div>
            <div className='HeaderTop'>
                <img src={require('../../Medias/Logo-header.png')} />

                <div className='indicadores'>
                    <div className='total'>
                        <span>R${gasto}</span>
                    </div>
                    <div className='total'>
                        <span>Total ganho</span>
                    </div>
                    <div className='total'>
                        <span>Total Investido</span>
                    </div>
                </div>

            </div>    

        </div>
    )
}