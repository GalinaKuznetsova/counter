import { Dispatch } from "redux"
import { AppRootStateType } from "./store"

export type counterType = {
    value:number,
    maxValue:number,
    startValue:number,
    isEditting:boolean
  }


const initialState: counterType = {
    value:0,
    maxValue:0,
    startValue:0,
    isEditting:true
}

export const counterReducer = (state: counterType = initialState, action: ActionsType): counterType => {
    switch (action.type) {
      case 'SET-VALUE' :{
        if (state.value <= state.maxValue-1) {
            return {
                ...state,
                 value:state.value + 1
            }}
            else {
                return {
                    ...state,
                    value:state.value
                }
            
        }
        
      }
        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue : action.startValue,
                value : action.startValue
            };
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue : action.maxValue
            };
        }

        case 'SET-IS-EDITTING': {
            return {
                ...state,
                isEditting : action.isEditting
            };
        }
     
      
      
       
        default:
            return state;
    }
}

export type ActionsType =
 setStartValueActionType 
 | setMAxValueActionType 
 | setIsEdittingActionType
 | setValueActionType 

export type setStartValueActionType = ReturnType<typeof setStartValueAC>
export type setMAxValueActionType = ReturnType<typeof setMaxValueAC>
export type setIsEdittingActionType = ReturnType<typeof setIsEdittingAC>
export type setValueActionType = ReturnType<typeof setValueAC>

export const setValueAC = () => {
    return { type: 'SET-VALUE'} as const 
}

export const setStartValueAC = ( startValue: number) => {
    return { type: 'SET-START-VALUE', startValue} as const 
}

export const setMaxValueAC = ( maxValue: number) => {
    return { type: 'SET-MAX-VALUE', maxValue} as const 
}


export const setIsEdittingAC = ( isEditting: boolean) => {
    return { type: 'SET-IS-EDITTING', isEditting} as const 
}


// Thunk


