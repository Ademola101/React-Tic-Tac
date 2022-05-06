import { PlayboxStyled } from "./styles/Playbox.styles"
import { CircleStyled } from "./styles/Circle.styles";

import React from 'react';
import { useContext } from "react";
import { gameContext } from "../Helper/Context";
import Playbox from "./Playbox";

const Playcircle = () => {
  const {SetPlayState,PlayState} = useContext(gameContext);

  const changeState = () => {
    SetPlayState('Played')
    
  }

  console.log(PlayState);
  return (
    <>
<PlayboxStyled  onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'playBox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'Playbox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'Playbox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'Playbox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'Playbox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'playBox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'playBox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
<PlayboxStyled as= 'playBox' onClick={changeState}>

<CircleStyled>

</CircleStyled>
  </PlayboxStyled>
      
    </>
  );
}

export default Playcircle;


