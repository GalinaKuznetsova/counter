
import styled from "styled-components";

type ButtonTypeProps = {
  name: string;
  onClickHandler: () => void;
  isDisabel?: boolean;
};
export const Button: React.FC<ButtonTypeProps> = (props) => {
 
  return (
    <div>
      <button
        className="Btn"
        disabled={props.isDisabel}
        onClick={props.onClickHandler}
      >
        {props.name}
      </button>
    </div>
  );
};
