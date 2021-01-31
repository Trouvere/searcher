import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";

type HightLightProps = {
  inputText: string;
  str: string;
};
const HightLight: FunctionComponent<HightLightProps> = ({
  inputText,
  str,
}: HightLightProps): JSX.Element => {
  const generateKey = (): string => {
    let k = uuidv4();
    return `HightLight_${k}`;
  };
  if (!inputText) return <>{str}</>;
  const regexp: RegExp = new RegExp(inputText, "ig");

  const matchValue: RegExpMatchArray | null = str.match(regexp);

  if (matchValue) {
    let strSplit: string[] = str.split(regexp);
    let strSplitMap: JSX.Element[] = strSplit.map(
      (s: string, index: number, array: string[]) => {
        if (index < array.length - 1) {
          const c: string | undefined = matchValue.shift();

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

    let wrap: JSX.Element = <>{strSplitMap}</>;
    return wrap;
  }
  return <>{str}</>;
};
export default HightLight;
