import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./store";
import { setIsEdittingAC, setMaxValueAC, setStartValueAC } from "./counter-reducer";


export const InstallCounter = () => {
  const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
  const maxValueInput = useSelector<AppRootStateType, number>(state => state.counter.maxValue)

  const dispatch = useDispatch();


 
  const isIncorrecStartMaxValues= startValue >= maxValueInput || startValue < 0 || maxValueInput < 0
  
  const StartValue = ()=>{
    if (!isIncorrecStartMaxValues) {
      dispatch( setIsEdittingAC(false));
      dispatch(setStartValueAC(startValue));
    }

    
   }

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>)=>{
    dispatch(setMaxValueAC(Number(e.currentTarget.value)));

    if (!isIncorrecStartMaxValues) {
      dispatch( setIsEdittingAC(true));
    }
  }
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>)=>{
    dispatch(setStartValueAC(Number(e.currentTarget.value)));
    if (!isIncorrecStartMaxValues) {
      dispatch( setIsEdittingAC(true));
  
    }
  }
 
  return (
    <div className="InstallCounterContent">
      <div className="InputContent">  
      <div className="InputMaxValue">max value:<input type="number" value={maxValueInput} onChange={onChangeMaxValue}
      className={
        maxValueInput >= 0 ? "InputStyled" : "InputRedStyled"
      }/></div>    
     
      <div className="InputStartValue">start value:<input type="number" value={startValue} onChange={onChangeStartValue}
      className={
        startValue >= 0 ? "InputStyled" : "InputRedStyled"
      }/></div>    
      </div>
   <div  className="BtnContent">
   <Button 
          name={"Set"}
          onClickHandler={StartValue}
          isDisabel={isIncorrecStartMaxValues}
        />
   </div>
    
 
      

    </div>
  );
};
