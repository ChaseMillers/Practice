import React from "react";
import {Link} from 'react-router-dom'
export default function FunStuff (props){
    return (
      <div>
            <h1>Wow I found the Fun! So Much Fun!</h1>
            <button onClick={props.changeState}>How Do You Fell Now</button>
            <br/>
            <Link
            to='/' 
            role='button'
            >To Much Fun Go Back!</Link>
      </div>
    )
}