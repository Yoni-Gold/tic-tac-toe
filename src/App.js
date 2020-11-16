import React , {useState, useEffect} from 'react';
import GridCell from './GrisCell';
import './App.css';
import axios from 'axios';
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

let gameEnd = false;

function App() { 

  const GameUpdate = async () => {
      let update = await axios.get("http://localhost:3001/v1/game").then(r => r.data);
      setBool(update.turn); setMove(update.move); setGame(update.board);
  };

  const [bool , setBool] = useState(true);

  const [move , setMove] = useState(0);

  const [open , setOpen] = useState(false);

  const [openRecords , setOpenRecords] = useState(false);

  const original = {a: "z", b: "z", c: "z", 
                    d: "z", e: "z", f: "z", 
                    g: "z", h: "z", i: "z"};
  
  const [game , setGame] =  useState(0);
  const StartGame = game === 0 && axios.get("http://localhost:3001/v1/game").then(r => r.data).then(r => {setGame(r.board)});

  
  
  //useEffect(() => {GameUpdate()} , [move]);
  //setInterval(GameUpdate() , 2000);
  

  const CheckWin = (target) => {
      if (
            game.a === game.b && game.b === game.c && game.a === target||
            game.d === game.e && game.e === game.f && game.d === target||
            game.g === game.h && game.h === game.i && game.g === target||
            game.a === game.d && game.d === game.g && game.a === target||
            game.b === game.e && game.e === game.h && game.b === target||
            game.c === game.f && game.f === game.i && game.c === target||
            game.a === game.e && game.e === game.i && game.a === target||
            game.c === game.e && game.e === game.g && game.c === target
         )
      {
        gameEnd = true;
        setOpen(true);
        
      }

      else if (game.a !== "z" && game.b !== "z" && game.c !== "z" && game.d !== "z" && game.e !== "z" && game.f !== "z" && game.g !== "z" && game.h !== "z" && game.i !== "z")
      {alert("DRAW")}
  }

  const sendWinnerInfo = () => {
    if(document.getElementById("inputWinner").value && document.getElementById("inputPassword").value)
    {
      let data = {name: document.getElementById("inputWinner").value, date: new Date(), password: document.getElementById("inputPassword").value};
      axios.post("http://localhost:3001/v1/records" , data);
    }
    setOpen(false);
  };

  const chooseTurn = async (num) => {
    if (!gameEnd)
    {
      const { data } = await axios.get("http://localhost:3001/v1/board");
      console.log(data);
      if (data[num])
        {setMove(data[num].move); setGame(data[num].board); setBool(!data[num].turn);}
    }
  }

  const Clicked = (e) => {
    if (game[e.target.id] === "z" && !gameEnd)
    { 
      if (bool) 
      {
        let x = game;
        x[e.target.id] = "X";
        axios.post("http://localhost:3001/v1/board" , {board : x , turn : bool , move : move + 1});
        setGame(x);
        setMove(move + 1);
      }

      else
      {
        let x = game;
        x[e.target.id] = "O";
        axios.post("http://localhost:3001/v1/board" , {board : x , turn : bool , move : move + 1});
        setGame(x);
        setMove(move + 1);
      }
      setBool(!bool);
      !gameEnd && CheckWin(game[e.target.id]);
    }
  };

  const [recordsList , setList] = useState([]);

  const showRecords = async () => {await axios.get("http://localhost:3001/v1/records").then(r => r.data).then(r => {let answer =  r.records.map(v => {return ` Name: ${v.name} , Date: ${v.date} `}); setList(answer)});};
  
  return (
    <>

    <h1>Tic Tac Toe</h1>
    <div id="controlButtons"><button className="b" onClick={() => {chooseTurn(move - 1)}}>← Undo</button>
    <button className="b" onClick={async () => {axios.delete("http://localhost:3001/v1/game");setMove(0); setBool(true); setGame(original); gameEnd = false;}}>New Game</button>
    <button className="b" onClick={() => {chooseTurn(move + 1)}}>Forward →</button></div>
    <div className="App">
      <button className="griditem" id="a" onClick={Clicked}><GridCell value={game.a}/></button><button className="griditem" id="b" onClick={Clicked}><GridCell value={game.b}/></button><button className="griditem" id="c" onClick={Clicked}><GridCell value={game.c} /></button>
      <button className="griditem" id="d" onClick={Clicked}><GridCell value={game.d}/></button><button className="griditem" id="e" onClick={Clicked}><GridCell value={game.e}/></button><button className="griditem" id="f" onClick={Clicked}><GridCell value={game.f} /></button>
      <button className="griditem" id="g" onClick={Clicked}><GridCell value={game.g}/></button><button className="griditem" id="h" onClick={Clicked}><GridCell value={game.h}/></button><button className="griditem" id="i" onClick={Clicked}><GridCell value={game.i} /></button>
    </div>
    <button className="b" onClick={async () => {showRecords(); setOpenRecords(true)}}>show records</button>
    <button className="b" onClick={() => {GameUpdate()}}>UPDATE</button>

    <Modal
        aria-labelledby="hi"
        aria-describedby="description" 
        open={open}
        className={"modal"}
        onClose={() => {setOpen(false)}}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={"paper"}>
          <h2>Player {bool ? "O" : "X"} Won!</h2>
            <p>Please Enter Your Name: </p>
            <input id={"inputWinner"}></input>
            <p>And a password to access mongoDB</p>
            <input id={"inputPassword"}></input>
            <button onClick={sendWinnerInfo}>Submit</button>
          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="hi"
        aria-describedby="description" 
        open={openRecords}
        className={"modal"}
        onClose={() => {setOpenRecords(false)}}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openRecords}>
          <div className={"paper"}>
          {recordsList.map((v , i) => {return <div key={i}>{v}</div>})}
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default App;
