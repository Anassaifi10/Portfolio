import './App.css';
import { useState } from 'react';
import LoadingScrean from './components/loadingScrean';
import Nevbar from './components/Nevbar';
import MobileManue from './components/MobileManue';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Project from './components/sections/Project';
import Contact from './components/sections/Contact';

function App() {
  // for loading screen
  const [isvisibleLoading, setVisibleLoading] = useState(true);
  const [manuOpen, setmanuOpen] = useState(false)
  return (
    <div>
      {isvisibleLoading ? <LoadingScrean toglevisibleLoading={() => setVisibleLoading(false)} />
        : <>
          <div className={`min-h-screen transition-opacity duration-700 ${!isvisibleLoading ? "opacity-100" : "opacity-0"}`} >
            <Nevbar manuOpen={manuOpen} setmanuOpen={setmanuOpen} />
            <MobileManue manuOpen={manuOpen} setmanuOpen={setmanuOpen} />
            <Home />
            <About />
            <Project />
            <Contact/>
          </div>
        </>
      }


    </div>
  );
}

export default App;
