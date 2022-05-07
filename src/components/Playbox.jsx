import { useContext } from "react";
import { gameContext } from "../Helper/Context";
import { Cond } from "./styles/cond.styles";


const Playbox = ({className, onClick,text}) => {
  const {PlayState} = useContext(gameContext)
  
  return ( 

    PlayState === 'X' ? <Cond >
    {PlayState}
  </Cond>
    :<div onClick={onClick} className= {className}>
    </div> 
  
    
  );
}

export default Playbox;
