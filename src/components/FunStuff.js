import React from 'react';

export default function FunStuff (props){
 
  return (
    <form onSubmit={props.changeState}>
    <button>The Fun Button!</button>
    </form>
  )
}