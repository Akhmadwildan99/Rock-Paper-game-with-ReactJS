import React from 'react'

export default function Com(props) {
    const {
        rockCom,
        paperCom,
        scissorsCom,
        scoreCom
    } = props
    return (
        <div className="col-4">
            <h1 className="title-com">COM</h1>
            <ul className="com">
              <li><img id="img-com-batu" src="images/batu.png" alt="batu"  className={rockCom ?"batu active-player" : "batu"}/></li>
              <li><img id="img-com-kertas" src="images/kertas.png" alt="kertas"  className={paperCom ? "kertas active-player" : "kertas"}/></li>
              <li><img id="img-com-gunting" src="images/gunting.png" alt="gunting"  className={scissorsCom ? "gunting active-player" : "gunting"}/></li>
            </ul>
            <h1>SCORE:</h1>
            <div className="score_P1">{scoreCom}</div>
         </div>
    )
}
