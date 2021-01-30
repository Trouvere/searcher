import React, { FunctionComponent } from "react";

type InputTextProps = {
  value: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
};

const InputText: FunctionComponent<InputTextProps> = ({ value, onChange }) => (
  //
  <div className={"search"}>
    <input
      className={"searchInput"}
      value={value}
      onChange={onChange}
      placeholder="Введите символы для поиска в тексте"
    />
  </div>
);
export default InputText;
