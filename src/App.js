
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setmode] = useState('dark')

  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark')
    }
    else{
      setmode('light')
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <TextForm heading='Enter Text For Analyzing'/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
