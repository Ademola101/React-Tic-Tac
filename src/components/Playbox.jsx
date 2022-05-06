import { useContext } from "react";
import { gameContext } from "../Helper/Context";


const Playbox = ({className, onClick}) => {
  const {PlayState} = useContext(gameContext)
  
  return ( 

    PlayState === 'Played' ? <div>
    Played
  </div>
    :<button onClick={onClick} className= {className}>
    </button> 
  
    
  );
}

export default Playbox;
