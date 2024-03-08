// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { AppRootStateType} from "./store";
// import { counterType, setValueAC, setValueTC } from "./counter-reducer";
// import { useDispatch } from "react-redux";

// export function D(){
// // const [value,setValue] = useState<number>(0)
// const value = useSelector<AppRootStateType,counterType>(state => state.counter)
// const dispatch = useDispatch();
// // useEffect(()=>{
// //     let valueAsString = localStorage.getItem('counterValue')
// //     if (valueAsString) {
// //         let newValue = JSON.parse(valueAsString)
// //         setValue(newValue)
// //     }
// // },[])
// // useEffect(()=>{
// //     localStorage.setItem('counterValue',JSON.stringify(value))
// // },[value])
// const incHandler = () => {
//     // dispatch(setValueAC())
//    dispatch(setValueAC())
// }
// return(
//     <div>
//         <h1>{value.value}</h1>
//         <button onClick={incHandler}>Inc</button>
//     </div>
// )
// }