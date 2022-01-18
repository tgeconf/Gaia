import React from "react";
import { BlueButton } from "./ButtonStyle";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <BlueButton>{props.label}</BlueButton>;
};

export default Button;
