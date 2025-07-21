import React, { Children, useReducer, type ReactNode } from "react";

// ✅ Using const + union instead of enum

const initialState = { count: 0 };


const initState = { count: 0}
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
} 
 type ReducerAction  = {
  type: REDUCER_ACTION_TYPE
}

  const reducer =(state: typeof initState , action: ReducerAction
) : typeof initState  =>{

  switch (action.type){

    case REDUCER_ACTION_TYPE.INCREMENT :
      return {...state , count: state.count + 1}

      case REDUCER_ACTION_TYPE.DECREMENT :
        return {...state , count: state.count + 1}
        default: 
        throw new Error("Error Encounted")
  }
 
}

export const ReducerHook = () => {
  

  return (
  
  );
};
