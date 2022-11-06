import { useState } from 'react';
import './App.css';
import End from './components/End';
import Main from './components/Main';

function App() {

  const [finished, setFinished] = useState(false)
  console.log(finished)

  return (
    <div className='main'>
      {finished ? <End /> : <Main setFinished={setFinished}/>}
    </div>
  );
}

export default App;

// need to be done

// - randomize options 
