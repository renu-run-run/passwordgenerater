import React from "react";
import { useState } from "react";
import ConfigurationOptions from "./ConfigurationOptions";
import GenerateButton from "./GenerateButton";

const Container = () => {
    const [charCount, setCharCount] = useState(0);
    const [incNumber, setIncNumber] = useState(false);
    const [incSplChars, setIncSplChars] = useState(false);
    const [casing, setCasing] = useState("");
  
  
  
    return (
      <div className="container">
        <h2 className="title">Password Generator</h2>
        <ConfigurationOptions 
          setCharCount={setCharCount}  
          setIncNumber={setIncNumber} 
          setIncSplChars={setIncSplChars}
          setCasing={setCasing}
        />
        <br />
        <GenerateButton 
          charCount={charCount} 
          incNumber={incNumber} 
          incSplChars={incSplChars} 
          casing={casing}
        />
      </div>
    )
  }

export default Container;