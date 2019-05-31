import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Child from './components/child'
import Main from './components/main'
export default class App extends Component{

constructor(props){
super(props)
this.state={
  fun:'Wow, So Much Fun I Cant Even!',
  noFun:"I Feel Dead Inside"
}
}

renderLogic(){
return (
  <div>
    <Route
      path='/FunPage'
      render={()=>
        <Child changeState={()=>this.changeState()}/>
      }  
    />
  
      <Route
        exact path= '/'
        render={()=>
          <Main changeState={()=>this.noFun()}/>
        }
      />
</div>
)
}

changeState(){
  console.log(this.state.fun)
}

noFun(){
console.log(this.state.noFun)
}

  render(){
    return(
      <div>
        {this.renderLogic()} 
      </div>
    )
  }
}