import React from 'react';

export default function Main(props){
    return(
        <form onSubmit={props.changeState}>
        <h1>The Fun.. Where is it?</h1>
        <button>Find the Fun!</button>
        </form>
    )
} 