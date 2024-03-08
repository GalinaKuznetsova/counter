import React from "react";

export type ModelTypeProps = {
  manufacture: string;
  model: string;
};

type ModelTabelTypeProps = {
  title: string;
  tasks: Array<ModelTypeProps>;
};

export const Model: React.FC<ModelTypeProps> = (props) => {
    const foo1 =() => {
        console.log(100200)
    }
    const foo2 = (n:number) => {
        console.log(n)
    }
  return (
    <>
      <table>
        <tr>
          <th>Manufacture</th>
          <td>Model</td>
        </tr>
        <tr>
          <td>{props.manufacture}</td>
          <td>{props.model}</td>
        </tr>
      </table>
    

    </>
  );
};
