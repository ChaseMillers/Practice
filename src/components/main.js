import React from 'react';
import {Link} from 'react-router-dom';
import Context from '../Context'


export default function Main(props){
    return(
        <Context.Consumer> 
        {(context) => (
        <div>
        <h1>The Fun.. Where is it?</h1>
        <button onClick={()=>context.noFun()}>Tell the Console How You Feel</button>
        <br/>
            <Link
                role="button"
                to="/FunPage"
                >Go to the FUN
            </Link>
        </div>)}
        </Context.Consumer>
        
    )
} 