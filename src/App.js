
import './App.css';
import { PlayboxStyled } from './components/styles/Playbox.styles';
import { CircleStyled } from './components/styles/Circle.styles';
import { AppStyle } from './components/styles/App.style';
import { useState } from 'react';
import { Played } from './components/styles/Played.styles';



function App() {

  const [PlayState, SetPlayState] = useState("");

  const changeState = () => {
    SetPlayState('Played')
    console.log(PlayState);
  }
  
  return ( 
    
    
    <AppStyle>
    

<PlayboxStyled as= 'playBox' onClick={changeState}>

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

  </AppStyle>


      

  
    
  
  );
}

export default App;
