import React, {useState, useEffect} from 'react';
import './game.css';

function Game() {
    const [pilihan, setPilihan] = useState('');
    const [rock, setRock] = useState(false);
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rockCom, setRockCom] = useState(false);
    const [paperCom, setPaperCom] = useState(false);
    const [scissorsCom, setScissorsCom] = useState(false);
    const [pilCom, setPilCom] = useState('');
    console.log(pilihan);
    console.log(pilCom);


    function choices(e){
      setPilihan(e.target.dataset.id);
      const com = Math.floor(Math.random() * 3) + 1;
      console.log(com);
      if(com === 1) return setPilCom('batu');
      if(com === 2) return setPilCom('kertas');
      return  setPilCom('gunting'); 
    }

    useEffect(() => {
        if(pilihan === "batu") {
            setRock(true)
            setPaper(false)
            setScissors(false)
        } else if(pilihan === "kertas") {
            setPaper(true)
            setRock(false)
            setScissors(false)
        } else if(pilihan === "gunting") {
            setScissors(true);
            setRock(false)
            setPaper(false)
        } else {
            setRock(false)
            setPaper(false)
            setScissors(false)
        }
    }, [pilihan]);

    useEffect(() => {
        if(pilCom === "batu") {
            setRockCom(true)
            setPaperCom(false)
            setScissorsCom(false)
        } else if(pilCom === "kertas") {
            setPaperCom(true)
            setRockCom(false)
            setScissorsCom(false)
        } else if(pilCom === "gunting") {
            setScissorsCom(true);
            setRockCom(false)
            setPaperCom(false)
        } else {
            setRockCom(false)
            setPaperCom(false)
            setScissorsCom(false)
        }
    }, [pilCom]);

 
    

    
    return (
    <section id="game-batu-kertas-gunting">
      <header className="header">
          <ul>
              <a href="/#"><li className="navigasi"> &laquo; </li></a>
              <a href="/#"><li className="logo"><img src="images/logo 1.jpg" alt=""/></li></a>
              <a href="/#"><li className="title">batu kertas gunting</li></a>
          </ul>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1 className="title-player">PLAYER 1</h1>
            <ul className="player">
              <li><img id="img-p-batu" src="images/batu.png" alt="batu" data-id="batu" className={rock ? "batu active-player" : "batu"}  onClick={choices} /></li>
              <li><img id="img-p-kertas" src="images/kertas.png" alt="kertas"  className={paper ? "kertas active-player" : "kertas"}  onClick={choices} data-id="kertas"/></li>
              <li><img id="img-p-gunting" src="images/gunting.png" alt="gunting"  className={scissors ? "gunting active-player" : "gunting"}  onClick={choices} data-id="gunting"/></li>
            </ul>
            <h1>SCORE:</h1>
            <div className="score_P1">0</div>
          </div>
          <div className="col-4">
              <div className="hasil">
                <h1 className="vs">vs</h1>
                <div className="result hidden">
                  menang
                </div>
                <img src="images/refresh.png" alt="refresh"  className="refresh"/>
              </div>
          </div>
          <div className="col-4">
            <h1 className="title-com">COM</h1>
            <ul className="com">
              <li><img id="img-com-batu" src="images/batu.png" alt="batu"  className={rockCom ?"batu active-player" : "batu"}/></li>
              <li><img id="img-com-kertas" src="images/kertas.png" alt="kertas"  className={paperCom ? "kertas active-player" : "kertas"}/></li>
              <li><img id="img-com-gunting" src="images/gunting.png" alt="gunting"  className={scissorsCom ? "gunting active-player" : "gunting"}/></li>
            </ul>
            <h1>TIME:</h1>
            <div className="time hidden">
              00:00:00
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Game
