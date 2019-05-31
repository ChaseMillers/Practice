import React from "react";

export default function FunPage (props){
    return (
        <form onSubmit={props.changeState}>
            <h1>Wow I found the Fun! So Much Fun!</h1>
            <button>To Much Fun Go Back!</button>
        </form>
    )
}