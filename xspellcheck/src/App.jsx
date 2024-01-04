import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedWord, setSuggestedWord] = useState("");
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const handleChange=(e)=>{
    const text=e.target.value
    setInputText(text)
    const words=text.split(" ")
    const correctedWords=words.map((word)=>{
      const correctedWord=customDictionary[word.toLowerCase()]
      return correctedWord || word
    })
    let firstCorrection=correctedWords.find((word,index)=>word!==words[index])
    setSuggestedWord(firstCorrection)
  }

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        name=""
        id=""
        cols="40"
        rows="5"
        placeholder="Enter text..."
        value={inputText}
        onChange={handleChange}
      ></textarea>
      {suggestedWord && <p>Did you mean: <strong>{suggestedWord}</strong>?</p>}
    </div>
  );
}

export default App;