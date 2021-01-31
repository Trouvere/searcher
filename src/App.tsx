import React, { useState } from "react";
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    setInputText(inputText);
  };

  return (
    <>
      <Title title="App для поиска и выделения символов в textarea" />
      <BacklitTextArea
        inputText={inputText}
        textareaText={textareaText}
        onChange={handleTextareaChange}
      />
      <InputText value={inputText} onChange={handleChange} />
    </>
  );
};
export default App;
