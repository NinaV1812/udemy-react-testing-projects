import './App.css';
import React, {Component} from "react"
import {connect} from "react-redux";
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import Input from "./InputComponent/input"
import { getSecretWord } from './actions/index';



class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[
          {guessedWord: "train", letterMatchCount: 3}
          ]}/>
          <Input/>
          <p>Learn React</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
}


// export default App;
export default connect(mapStateToProps)(App);


