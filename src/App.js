
import './App.css';
import { AppStyle } from './components/styles/App.style';
import { useState } from 'react';

import { gameContext } from './Helper/Context';
import Playcircle from './components/PlayCircle';


function App() {

  const [PlayState, SetPlayState] = useState({
    PlayerX: "X",
    PlayerY: "Y"
  });
  
  
  
  return ( 
    
    
    <AppStyle>
    <gameContext.Provider value={{PlayState, SetPlayState}}>
<Playcircle>

</Playcircle>
    </gameContext.Provider>


  </AppStyle>


      

  
    
  
  );
}

export default App;
