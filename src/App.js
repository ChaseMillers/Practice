import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Child from './components/child'
import Main from './components/main'
export default class App extends Component{

constructor(props){
super(props)
this.state={
  fun:false,
}
}

renderLogic(){
if(this.state.fun){
  return(
    <Route
      path='/FunPage'
      render={()=>
        <Child changeState={(e)=>this.changeState(e)}/>
      }  
    />
  )
  }
  else{
    return(
      <Route
        exact path= '/'
        render={()=>
          <Main changeState={(e)=>this.changeState(e)}/>
        }
      />
    )
  }
}

changeState(e){
  e.preventDefault();
  (this.state.fun) ? 
  this.setState({
    fun:false
  })
  :
  this.setState({
    fun:true
  })
}

  render(){
    return(
      <div>
        {this.renderLogic()} 
      </div>
    )
  }
}
