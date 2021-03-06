import React, {useState, useEffect} from 'react';
import Header from './header';
import Player from './Player';
import Com from './Com';
import './game.css';

function Game() {
    const [pilihan, setPilihan] = useState('');
    const [pilCom, setPilCom] = useState('');
    const [rock, setRock] = useState(false);
    const [paper, setPaper] = useState(false);
    const [scissors, setScissors] = useState(false);
    const [rockCom, setRockCom] = useState(false);
    const [paperCom, setPaperCom] = useState(false);
    const [scissorsCom, setScissorsCom] = useState(false);
    const [playerWin, setPlayerWin] = useState('');
    const [vs, setVs] = useState(false);
    const [score, setScore] = useState(0);
    const [scoreCom, setScoreCom] = useState(0);

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


    useEffect(() => {
      if(pilihan === 'batu' && pilCom === 'batu') {
        setPlayerWin('Draw');
        setScore(s => s + 0);
        setScoreCom(s => s + 0);
      } else if(pilihan === 'kertas' && pilCom === 'kertas') {
        setPlayerWin('Draw');
        setScore(s => s + 0);
        setScoreCom(s => s + 0);
      } else if(pilihan === 'gunting' && pilCom === 'gunting') {
        setPlayerWin('Draw');
        setScore(s => s + 0);
        setScoreCom(s => s + 0);
      } else if(pilihan === 'batu' && pilCom === 'kertas') {
        setPlayerWin('Com win');
        setScore(s => s + 0);
        setScoreCom(s => s + 1);
      } else if(pilihan === 'batu' && pilCom === 'gunting') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setScoreCom(s => s + 0);
      } else if(pilihan === 'kertas' && pilCom === 'gunting') {
        setPlayerWin('Com win');
        setScore(s => s + 0);
        setScoreCom(s => s + 1);
      } else if(pilihan === 'kertas' && pilCom === 'batu') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setScoreCom(s => s + 0);
      } else if(pilihan === 'gunting' && pilCom === 'batu') {
        setPlayerWin('Com win');
        setScore(s => s + 0);
        setScoreCom(s => s + 1);
      } else if(pilihan === 'gunting' && pilCom === 'kertas') {
        setPlayerWin('Player 1 win');
        setScore(s => s + 1);
        setScoreCom(s => s + 0);
      } else {
        setPlayerWin('');
        setScore(s => s + 0);
        setScoreCom(s => s + 0);
      }
    }, [playerWin, pilihan, pilCom])

    useEffect(()=> {
      if(playerWin !== "") {
        setTimeout(() => {
          setVs(true);
        }, 1000);
      }
    },[playerWin]);

    

    return (
    <section id="game-batu-kertas-gunting">
      <Header />
      <div className="container">
        <div className="row">
          <Player rock={rock} paper={paper} scissors={scissors} choices={choices} score={score} />
          <div className="col-4">
              <div className="hasil">
                <h1 className={vs ? "vs hidden" : "vs"}>vs</h1>
                <div className={vs ? "result" : "result hidden"}>
                  {playerWin}
                </div>
                <img src="images/refresh.png" alt="refresh"  className="refresh"/>
              </div>
          </div>
          <Com rockCom={rockCom} paperCom={paperCom} scissorsCom={scissorsCom} scoreCom={scoreCom} />
        </div>
      </div>
    </section>
    )
}

export default Game
