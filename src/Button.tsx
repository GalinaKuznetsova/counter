import React from "react";


type ButtonTypeProps = {
    title:string
}

export const Button:React.FC<ButtonTypeProps> = (props) => {
      return   <button>{props.title}</button>
      
     
      
}