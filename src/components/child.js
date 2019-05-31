import React from 'react';
import FunPage from './FunPage'

export default function Child (props){
    return(
        <div>
            <FunPage changeState={props.changeState}/>
        </div>
    )
}