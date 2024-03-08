type BtnResetType = {
  name: string;
  ResetCounter: () => void;
  counter: number;
  minCounter: number;
};
export const BtnReset = (props: BtnResetType) => {
  return (
    <div>
      <button
        className="Btn"
        disabled={props.counter === props.minCounter}
        onClick={() => {
          props.ResetCounter();
        }}
      >
        {" "}
        {props.name}
      </button>
    </div>
  );
};
