import React, { FunctionComponent } from "react";

type HightLightProps = {
  inputText: string;
  str: string;
};
const HightLight: FunctionComponent<HightLightProps> = ({
  inputText,
  str,
}: HightLightProps): JSX.Element => {
  // const { inputText, str } = props;
  const generateKey = (): string => {
    let k = new Date().getTime() * Math.floor(Math.random() * 1000);
    // console.log(k);
    return `${k}`;
  };
  if (!inputText) return <>{str}</>;
  const regexp: RegExp = new RegExp(inputText, "ig");
  // console.log(regexp);
  const matchValue: RegExpMatchArray | null = str.match(regexp);
  // console.log(matchValue);
  if (matchValue) {
    let strSplit: string[] = str.split(regexp);
    let strSplitMap: JSX.Element[] = strSplit.map(
      (s: string, index: number, array: string[]) => {
        if (index < array.length - 1) {
          const c: string | undefined = matchValue.shift();
          // console.log(c);
          return (
            <React.Fragment key={generateKey()}>
              {s}
              <span className={"hightlight"}>{c}</span>
            </React.Fragment>
          );
        }
        return <React.Fragment key={generateKey()}>{s}</React.Fragment>;
      }
    );
    // console.log(strSplitMap);
    let wrap: JSX.Element = <>{strSplitMap}</>;
    return wrap;
  }
  return <>{str}</>;
};
export default HightLight;
