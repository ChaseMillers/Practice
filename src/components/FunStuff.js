import React from "react";
import {Link} from 'react-router-dom';
import Context from '../Context'

export default function FunStuff (props){
  return (
      <Context.Consumer>
        {(context) => (
          <div>
            <h1>Wow I found All the Fun! So Much!</h1>
            <button onClick={()=> context.fun()}>How Do You Fell Now</button>
            <br/>
              <Link to="/" role="button">
              To Much Fun Go Back!
              </Link>
            </div>)}
      </Context.Consumer>
  )
}