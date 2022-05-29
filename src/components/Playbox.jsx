import { useContext } from "react";
import { gameContext } from "../Helper/Context";
import { Cond } from "./styles/cond.styles";


const Playbox = ({className, onClick}) => {
  const {PlayState} = useContext(gameContext)
  
  return ( 

    PlayState.PlayerX === 'X' ? <Cond >
    {PlayState}
  </Cond>
    :<div onClick={onClick} className= {className}>
    </div> 
  
    
  );
}

export default Playbox;
