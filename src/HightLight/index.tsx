import React, { useState, FunctionComponent } from "react";
import style from "./styles.module.css";

type HightLightProps = {
  inputText: string;
  str: string;
};
// any
const HightLight: FunctionComponent<HightLightProps> = ({
  inputText,
  str,
}: HightLightProps): any => {
  // const { inputText, str } = props;
  if (!inputText) return str;
  const regexp = new RegExp(inputText, "ig");
  const matchValue = str.match(regexp);
  // console.log(matchValue);
  if (matchValue) {
    // console.log("matchValue", matchValue);
    // console.log("str.split(regexp)", str.split(regexp));
    return str.split(regexp).map((s, index, array) => {
      if (index < array.length - 1) {
        const c = matchValue.shift();
        return (
          <>
            {s}
            <span className={"hightlight"}>{c}</span>
          </>
        );
      }
      return s;
    });
  }
  return str;
};
export default HightLight;
