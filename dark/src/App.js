import logo from './logo.svg';
import Main from './components/Main.js';
import Navbar from './components/Navbar.js';
import React from 'react';

function App() {

const [darkMode,setDarkmode]=React.useState(false);
    function toggleDarkMode(){
        setDarkmode(prev=>!prev)
    }

  return (
    <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
