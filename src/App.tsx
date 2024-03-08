import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { Tablo } from "./Components/Tablo";
import { InstallCounter } from "./Components/InstallCounter";
import { AppRootStateType } from "./Components/store";
import {  setStartValueAC, setValueAC } from "./Components/counter-reducer";
import { useDispatch, useSelector } from "react-redux";

// isEdititng -> true | false

function App() {

  const isEditting = useSelector<AppRootStateType, boolean>(state => state.counter.isEditting)
  const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
  const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
  const value = useSelector<AppRootStateType, number>(state => state.counter.value)
  const dispatch = useDispatch();


   function ResetCounter() {
    dispatch(setStartValueAC(startValue))
  }

  const IncreasingСounter = () => {
    dispatch(setValueAC());
 
  };

  return (
    <div className="App">
      <div className="Block1">
        <InstallCounter
          
        />
      </div>
      <div className="Block2">
        <Tablo
          startValue={startValue}
          value={value}
          isEditting={isEditting}
          maxValue={maxValue}
          IncreasingСounter={IncreasingСounter}
          ResetCounter={ResetCounter}
          
        
        />
      </div>
    </div>
  );
}

export default App;
