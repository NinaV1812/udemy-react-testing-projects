import logo from './logo.svg';
import './App.css';
import React, {Component} from "react"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"

class  App extends Component {
  render(){
    return (
      <div className="container" data-test="component-app">>
        <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[
          {guessedWord: "train", letterMatchCount: 3}
          ]}/>
          <p>Learn React</p>
      </div>
    )
  }
}

export default App;

