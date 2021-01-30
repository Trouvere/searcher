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
}: HightLightProps): JSX.Element => {
  // const { inputText, str } = props;
  if (!inputText) return <>{str}</>;
  const regexp: RegExp = new RegExp(inputText, "ig");
  console.log(regexp);
  const matchValue: RegExpMatchArray | null = str.match(regexp);
  console.log(matchValue);
  if (matchValue) {
    let strSplit: string[] = str.split(regexp);
    let strSplitMap: JSX.Element[] = strSplit.map(
      (s: string, index: number, array: string[]) => {
        if (index < array.length - 1) {
          const c: string | undefined = matchValue.shift();
          console.log(c);
          return (
            <>
              {s}
              <span className={"hightlight"}>{c}</span>
            </>
          );
        }
        return <>{s}</>;
      }
    );
    let wrap: JSX.Element = <>{strSplitMap}</>;
    return wrap;
  }
  return <>{str}</>;
};
export default HightLight;
