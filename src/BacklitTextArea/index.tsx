import React, { FunctionComponent } from "react";
import HightLight from "../HightLight";
// import style from "./styles.module.css";

type BacklitTextAreaProps = {
  // value: string;
  inputText: string;
  textareaText: string;
  onChange(event: React.FormEvent<HTMLTextAreaElement>): void;
};

const BacklitTextArea: FunctionComponent<BacklitTextAreaProps> = ({
  inputText,
  textareaText,
  onChange,
}) => (
  //
  <div className="editable">
    <div className="ttyt">
      <HightLight inputText={inputText} str={textareaText} />
    </div>
    <textarea
      className="ttt"
      value={textareaText}
      onChange={onChange}
      placeholder="Введите сюда текст"
    />
  </div>
);
export default BacklitTextArea;
