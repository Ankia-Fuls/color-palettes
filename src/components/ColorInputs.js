import "../css/ColorInputs.css"
import { useState } from 'react'
import { useMainContext } from "../context/MainContext";

function ColorInputs() {
    const [inputBackground, setInputBackground] = useState("");
    const [inputText, setInputText] = useState("");
    const [inputDecoration, setInputDecoration] = useState("");

    const { setColors } = useMainContext();

    const copy = (e) => {
        // e.preventDefault;
        const textVal = inputText !== "" ? inputText : "black";
        const backgroundVal = inputBackground !== "" ? inputBackground : "white";
        const decorationVal = inputDecoration !== "" ? inputDecoration : "red";

        setColors(textVal, backgroundVal, decorationVal);
    }

    return (
        <div className="main">
            <p>Text Color</p>
            <p>Background Color</p>
            <p>Decoration Color</p>
            <p></p>
            <input type="text" placeholder="Input text color..." id="input-text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <input type="text" placeholder="Input background color..." id="input-background" value={inputBackground} onChange={(e) => setInputBackground(e.target.value)} />
            <input type="text" placeholder="Input decoration color..." id="input-decoration" value={inputDecoration} onChange={(e) => setInputDecoration(e.target.value)} />
            <button id="submit-colors-btn" className="submit" onClick={copy}>COLOR ME!</button>
        </div>
    )
}

export default ColorInputs;