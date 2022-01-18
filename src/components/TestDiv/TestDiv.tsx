import React from "react";
import { BlueTest } from "./TestDivStyle";

export interface DivProps {
  label: string;
}

const TestDiv = (props: DivProps) => {
  return (
    <BlueTest>
      <div>new</div>
      <br />
      {"22" + props.label}
    </BlueTest>
  );
};

export default TestDiv;
