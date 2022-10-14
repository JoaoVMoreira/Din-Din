import HeaderTop from "../../components/HeaderTop/HeaderTop"
import Header from "../../components/Header/Header"
import './index.css'
import { useState } from "react"

function Investimento(){

    const [result, setResult] = useState(false)

    function Resultado(){
        setResult(true)
    }
    return(
        <div>
            <div>
                <HeaderTop />
                <Header />
            </div>
            <div className="content">
                <div className='title'>
                    <h1>Investimento</h1>
                </div>
                <div className="conteiner-investimento">
                    <div className="infos">
                        <span>Total investido</span>
                        <input placeholder="     Investimento por mês"/>
                        <select>
                            <option>Periodo em meses</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <select>
                            <option>Rendimento por dia</option>
                            <option>PicPay</option>
                            <option>NuBank</option>
                            <option>Poupança</option>
                        </select>
                    </div>
                    <div className="button">
                        <button onClick={Resultado}>Calcula valores</button>
                    </div>
                    {result == true ? (<div className="resultado">
                        <span>Em X meses terá o valor de X</span>
                    </div>):(<div></div>)}
                </div>

            </div>
        </div>
    )
}

export default Investimento