import React from 'react'

export default function Player(props) {
    const {
        rock,
        paper,
        scissors,
        choices,
        score
    } = props
    return (
        <div className="col-4">
            <h1 className="title-player">PLAYER 1</h1>
            <ul className="player">
              <li><img id="img-p-batu" src="images/batu.png" alt="batu" data-id="batu" className={rock ? "batu active-player" : "batu"}  onClick={choices} /></li>
              <li><img id="img-p-kertas" src="images/kertas.png" alt="kertas"  className={paper ? "kertas active-player" : "kertas"}  onClick={choices} data-id="kertas"/></li>
              <li><img id="img-p-gunting" src="images/gunting.png" alt="gunting"  className={scissors ? "gunting active-player" : "gunting"}  onClick={choices} data-id="gunting"/></li>
            </ul>
            <h1>SCORE:</h1>
            <div className="score_P1">{score}</div>
        </div>
    )
}
