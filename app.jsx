let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },

];


const Header = props => {
  return (
 
  <div className='header'>
  <div className="col-sm-10">
      
        <table className='stats'>
          <tr><td>PLAYERS:</td><td>{props.players.length}</td></tr>
          <tr><td>TOTAL POINTS:</td><td>{props.players.map(x => x.score).reduce((x, y) => x + y)}</td></tr>
        </table>
  </div>
  <div className="col-sm-4.5">
        <div className='stopwatch'>
          <h2>STOPWATCH</h2>
          <h1 className='stopwatch-time'>0</h1>
          <div className="row">
            <div className="col-xs-5">
          <button >start</button>
          </div>
          <div className="col-xs-5">
            <button>reset</button>
          </div>
          </div>
        </div>
      </div>
  </div>
  );
}
const PlayerList = ({players})=>{
  return (
    <div>
    {
      players.map((item,index)=>{
            return (
              <div className="player" key={index}>
              <div className="player-name">
              {item.name}
              </div>
              <div className="player-scored counter">
              <div className="counter-action decrement">-</div>
              <div className="counter-score">{item.score}</div>
              <div className="counter-action increment">+</div>
                      
              </div>
              </div>
             
            )       
        })
    }
    </div>);
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
    <form>
      <input type="text" placeholder="Enter a Name"/>
      <input type="submit" value ="Add Player"/>
    </form>
    </div>
  )
}

const Application = ({title, players}) => {
  return (
    <div className="scoreboard">
     <Header players={players}/>
     <PlayerList players={players}/>
     <PlayerForm />      
     </div>
  ) ;
}
ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));