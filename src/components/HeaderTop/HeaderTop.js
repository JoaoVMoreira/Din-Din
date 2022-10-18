import {useEffect, useState } from 'react'
import firebase from 'firebase'
import './HeaderTop.css'

export default function HeaderTop(){

    const [totalGasto, setTotalGasto] = useState([])
    const [totalGanho, setTotalGanho] = useState([])
    const [totalInv, setTotalInv] = useState([])
    let valorSomado = 0
    let valorSomadoGanho = 0
    let valorSomadoInv = 0
    

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
        let inv = []
        
        snapshot.forEach((doc) => {
            if (doc.data().tipo === 'Ganho') {
                ganho.push({
                    valor: doc.data().valor
                })
            }
        })
        snapshot.forEach((doc) => {
            if (doc.data().tipo === 'Gasto') {
                gasto.push({
                    valor: doc.data().valor
                })
            }
        })
        snapshot.forEach((doc) => {
            if (doc.data().tipo === 'Investimento') {
                inv.push({
                    valor: doc.data().valor
                })
            }
        })

        setTotalGasto(totalGasto => [...gasto])
        MostraGasto()

        setTotalGanho(totalGanho => [...ganho])
        MostraGanho()

        setTotalInv(totalInv => [...totalInv, ...inv])
        MostraInv()


    }

    function MostraGasto() {
        let tot = totalGasto.length
        let contador = 0

        while (contador < tot) {
            let totalGastoFloat = parseFloat(totalGasto[contador].valor)
            valorSomado = valorSomado + totalGastoFloat
            contador = contador + 1
        }
        localStorage.setItem('gastoTot', valorSomado)
    }

    function MostraGanho() {
        let totGanho = totalGanho.length
        let contador = 0

        while (contador < totGanho) {
            let totalGanhoFloat = parseFloat(totalGanho[contador].valor)
            valorSomadoGanho = valorSomadoGanho + totalGanhoFloat
            contador = contador + 1
            
        }
        localStorage.setItem('ganhoTot', valorSomadoGanho)
    }

    function MostraInv() {
        let tot = totalInv.length
        let contador = 0

        while (contador < tot) {
            let totalInvFloat = parseFloat(totalInv[contador].valor)
            valorSomadoInv = valorSomadoGanho + totalInvFloat
            contador = contador + 1
        }
        localStorage.setItem('InvTot', valorSomadoInv)
    }

    return(
        <div>
            <div className='HeaderTop'>
                <img src={require('../../Medias/Logo-header.png')} />

                <div className='indicadores'>
                    <div className='total'>
                        <span>R${localStorage.getItem('gastoTot')}</span>
                    </div>
                    <div className='total'>
                        <span>R${localStorage.getItem('ganhoTot')}</span>
                    </div>
                    <div className='total'>
                        <span>R${localStorage.getItem('InvTot')}</span>
                    </div>
                </div>

            </div>    

        </div>
    )
}