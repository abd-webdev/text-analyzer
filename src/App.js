import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, {useState} from 'react'
// import About from "./components/About";

function App(props) {

    const [mode , setMode] = useState("light");
    const [alert , setAlert] = useState(null);
    
    const showAlert= (message, type)=>{
            setAlert({
               msg: message,
               type: type
            });
    }

    const toggleMode = ()=> {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#0f0e29'; 
        // showAlert("Dark mode has been enabled" , "success");
        // document.title = 'TextUtils - Dark mode';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        // showAlert("Light mode has been enabled" , "success");
        // document.title = 'TextUtils - Light mode';
      }
    }
        
    //  To Hide Alert After some time

    setTimeout(()=>{
      setAlert(null);
    } ,2000)

    const [bgColor , setBgColor] = useState(null);

    const HanldeMode1 = ()=>{
      setBgColor({
        backgroundColor: 'blue',
        color: 'green'
      });
          document.body.style.backgroundColor = '#b8c0ff'; 
    }
    const HanldeMode2 = ()=>{
      setBgColor({
        backgroundColor: 'orange',
        color: 'blue'
      });
       document.body.style.backgroundColor = '#f4d08e'; 
    }
    const HanldeMode3 = ()=>{
      setBgColor({
        backgroundColor: 'green',
        color: 'purple'
      });
      document.body.style.backgroundColor = '#97ff97'; 
    }
    const HanldeMode4 = ()=>{
      setBgColor({
        backgroundColor: 'red',
        color: 'yellow'
      });
       document.body.style.backgroundColor = '#d87878'; 
    }
    
    
  return (
    <>
      <Navbar title="WordWise" about="About Us" mode={mode} toggleMode={toggleMode} bgColor={bgColor} HanldeMode1={HanldeMode1}
      HanldeMode2={HanldeMode2} HanldeMode3={HanldeMode3} HanldeMode4={HanldeMode4}/>
      <Alert alert={alert}/>
          <div className="container">
      <TextForm heading="WordWise - Word counter, Character counter, Try it! " mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;