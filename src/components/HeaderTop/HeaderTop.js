import './HeaderTop.css'

export default function HeaderTop(){
    return(
        <div>
            <div className='HeaderTop'>
                <img src={require('../../Medias/Logo-header.png')} />

                <div className='indicadores'>
                    <div className='total'>
                        <span>Total gasto</span>
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