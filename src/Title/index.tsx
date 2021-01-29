import React, { FunctionComponent } from "react";
// import style from "./styles.module.css";

type TitleProps = {
  title: string;
};

const Title: FunctionComponent<TitleProps> = ({ title }) => <h1>{title}</h1>;

export default Title;
