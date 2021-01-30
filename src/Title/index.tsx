import React, { FunctionComponent } from "react";

type TitleProps = {
  title: string;
};

const Title: FunctionComponent<TitleProps> = ({ title }) => <h1>{title}</h1>;

export default Title;
