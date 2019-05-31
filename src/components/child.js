import React from 'react';
import FunStuff from './FunStuff'

export default function child (props){
    return(
       <FunStuff changeState={props.changeState}/>
    )
}
