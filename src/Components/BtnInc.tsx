type BtnIncType = {
  name: string;
  IncreasingСounter: () => void;
  counter: number;
  maxCounter: number;
};
export const BtnInc = (props: BtnIncType) => {
  return (
    <div>
      <button
        className="Btn"
        disabled={props.counter === props.maxCounter}
        onClick={() => {
          props.IncreasingСounter();
        }}
      >
        {" "}
        {props.name}
      </button>
    </div>
  );
};
