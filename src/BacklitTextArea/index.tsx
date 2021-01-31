import React, { FunctionComponent } from "react";
import HightLight from "../HightLight";

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
    <div className="wraperHightLight">
      <HightLight inputText={inputText} str={textareaText} />
    </div>
    <textarea
      className="BacklitTextArea"
      value={textareaText}
      onChange={onChange}
      placeholder="Введите сюда текст"
    />
  </div>
);
export default BacklitTextArea;
