import { useContext } from "react";
import { gameContext } from "../Helper/Context";


const Playbox = ({className, onClick}) => {
  const {PlayState} = useContext(gameContext)
  
  return ( 

    PlayState === 'Played' ?
    <button onClick={onClick} className= {className}>
    </button> 
    : <div>
      Played
    </div>

    
  );
}

export default Playbox;
