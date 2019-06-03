import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Child from './components/child'
import Main from './components/main'
import Context from './Context'


export default class App extends Component{

constructor(props){
super(props);
this.state={
  fun:'Wow, So Much Fun I Cant Even!',
  noFun:"I Feel Dead Inside"
};
}


renderLogic(){
  return (
    <div>
      <Route
      exact path="/"
      component={Main}
      />
      <Route
      exact path="/FunPage"
      component={Child}
      />
    </div>
  )
}

fun(){
  console.log(this.state.fun)
}

noFun(){
  console.log(this.state.noFun)
}

  render(){
    const value ={
      fun: ()=> this.fun(),
      noFun: ()=> this.noFun(),
      state: this.state
    }

    return(
      <main>
      <Context.Provider value={value}>
        {this.renderLogic()}
      </Context.Provider>
      </main>
    )
  }
}