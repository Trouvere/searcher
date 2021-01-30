import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
// import logo from "./logo.svg";
import HightLight from "./HightLight";
import Title from "./Title";
import "./App.css";

// type TitleProps = {
//   title: string;
// };

// const Title = ({ title }: TitleProps) => <h1>{title}</h1>;

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
      <Title title="App для поиска и выделения символов в textarea" />

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
          onChange={handleChange}
          placeholder="Введите символы для поиска в тексте"
        />
      </div>

      <HightLight inputText={inputText} str={textareaText} />
    </>
  );
};
export default App;
