import styled from "styled-components";
import { Button } from "./Button";


type TabloType = { 
  value:number
  startValue: number;
  maxValue: number;
  ResetCounter:()=>void
  IncreasingСounter:()=>void
  isEditting :boolean
};

export const Tablo = (props: TabloType) => {
  const AddCounter = ()=>{
      props.IncreasingСounter()
  }

  const Reset = ()=>{
    props.ResetCounter()
  }
 
console.log(props.isEditting)
  const isIncorrecStartMaxValues = props.startValue < 0 || props.startValue >= props.maxValue  || props.value >= props.maxValue

  return (
    <div className="TabloContent">
      <div
        className={
          isIncorrecStartMaxValues ? "TabloRedStyled" : "TabloStyled"
        }
      > 
   {/* {isIncorrecStartMaxValues ? "Incorrect value!" : "Enter value and press 'set"} */}
 {props.isEditting ? <div >{isIncorrecStartMaxValues ? "Incorrect value!" : "Enter value and press 'set" }</div> : props.value}
 
    
   
       
    
      </div>
      <BtnContent>
      
        <Button
          name={"Inc"}
          onClickHandler={AddCounter}
          isDisabel={props.startValue === props.maxValue || props.value === props.maxValue}
        />
        <Button
          name={"Reset"}
          onClickHandler={Reset}
          // isDisabel={value === minValue}
        />
      
      
      </BtnContent>
    </div>
  );
};


const BtnContent = styled.div`
  display: flex;
  justify-content: space-between;
`;