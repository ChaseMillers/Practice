import React, {Component} from 'react';
import './App.css';
import Child from './components/child'


export default class App extends Component {

  constructor (props){
    super (props)
    this.state= {
      fun: false,
    }
  }
    
  changeState(e){
    e.preventDefault()
    
    if(this.state.fun){
      console.log("state Changed to false")
      this.setState({
      fun: false,
    })
  }
    else if (this.state.fun === false){
      console.log("state Changed to true")
      this.setState({
        fun:true,
      })
    }
  }

  whatToRender(){
    if (this.state.fun){
      return (
        <div>
          <h1>This is so much Fun!</h1>
          <Child changeState={(e)=> this.changeState(e)} />
        </div>
      )
    }
    else {
      return(
        <div>
          <h1>this is the App Component<br/>I'm not having fun</h1>
          <Child changeState={(e)=> this.changeState(e)} />
        </div>
      )
    }
  }

  render(){ 
    return(
      <div>
        {this.whatToRender()}
      </div>
    )
}

}