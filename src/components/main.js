import React from 'react';
import {Link} from 'react-router-dom'

export default function Main(props){
    return(
        <div>
        <h1>The Fun.. Where is it?</h1>
        <button onClick={props.changeState}>Tell the Console How You Feel</button>
        <br/>
        <Link
        to='/FunPage' 
        role='button'
        >Find The Fun!</Link>
        </div>
    )
} 