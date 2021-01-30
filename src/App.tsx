import React, { useState } from "react";

import HightLight from "./HightLight";
import Title from "./Title";
import InputText from "./InputText";
import BacklitTextArea from "./BacklitTextArea";

import "./App.css";

const App = () => {
  const [textareaText, setTextareaText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const {
      target: { value: textareaText },
    } = e;
    setTextareaText(textareaText);
    console.log(textareaText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    console.log(inputText);
    setInputText(inputText);
  };

  return (
    <>
      {/* <Title title="App для поиска и выделения символов в textarea" />
      <div className="editable">
        <div className={"ttyt"}>
          <HightLight inputText={inputText} str={textareaText} />
        </div>
        <textarea
          className="ttt"
          value={textareaText}
          onChange={handleTextareaChange}
          placeholder="Введите сюда текст"
        />
      </div>
      <div className={"search"}>
        <input
          className={"searchInput"}
          value={inputText}
          onChange={() => handleChange}
          placeholder="Введите символы для поиска в тексте"
        />
      </div> */}

      <BacklitTextArea
        inputText={inputText}
        textareaText={textareaText}
        onChange={handleTextareaChange}
      />
      <InputText value={inputText} onChange={handleChange} />
      <HightLight inputText={inputText} str={textareaText} />
      {/* TEST */}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {/* TEST */}
    </>
  );
};
export default App;
