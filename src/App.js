
import './App.css';

import { useState } from 'react';





function App() {

  const [board,setBoard] = useState(Array(9).fill(null));
  
  
  return ( 
  <div clasName = "App">
  <div className='Board'>


  </div>
  </div>  
    
  
  );
}

export default App;
