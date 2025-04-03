import { useState } from 'react';
import './App.css';
import LoadingScrean from './components/loadingScrean';
import Nevbar from './components/Nevbar';
import MobileManue from './components/MobileManue';

function App() {
  const [isvisibleLoading, setVisibleLoading] = useState(true);
  const [manuOpen,setmanuOpen]=useState(false)
  return (
    <div>
      {isvisibleLoading && <LoadingScrean toglevisibleLoading={() => setVisibleLoading(false)} />}

      <div className={`min-h-screen transition-opacity duration-700 ${!isvisibleLoading?"opacity-100":"opacity-0"}`} >
        <Nevbar manuOpen={manuOpen} setmanuOpen={setmanuOpen}/>
        <MobileManue manuOpen={manuOpen} setmanuOpen={setmanuOpen}/>
        
      </div>
    </div>
  );
}

export default App;
