import { createContext, useState, useContext } from "react";

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

export const VarProvider = ({ children }) => {

    const [inputText, setInputText] = useState("black");
    const [inputBackground, setInputBackground] = useState("white");
    const [inputDecoration, setInputDecoration] = useState("underline 2px red");
    const [inputBorder, setInputBorder] = useState("red");


    const setColors = (text, background, decoration) => {

        const newText = text !== "" ? text : "black";
        const newBackground = background !== "" ? background : "white";
        const newDecoration = decoration !== "" ? `underline 2px ${decoration}` : "underline 2px blue";
        const newBorder = decoration !== "" ? decoration : "red";

        console.log("test")

        setInputText(newText);
        setInputBackground(newBackground);
        setInputDecoration(newDecoration);
        setInputBorder(newBorder);

    }
    const value = {
        inputText,
        inputBackground,
        inputDecoration,
        inputBorder,
        setColors
    }

    return <MainContext.Provider value={value}>
        {children}
    </MainContext.Provider>

}     