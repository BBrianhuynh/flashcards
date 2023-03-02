import './App.css';
import React, {useState} from 'react'
import ReactCardFlip from "react-card-flip";
const App = () => {
  var [count, setCount] = useState(0);
  const [flip, setFlip] = useState(false);
  if(count == 10){
    count = 0;
  }
  if (count == -1)
  {
    count = 9;
  }
  return (
    <div className="App">
      <div>
      <h1>
        Number to Words!
      </h1>
      </div>
      <div>
        <h2>
          A flashcard set to help you learn how numbers are spelled using words.
        </h2>
      </div>
      <div>
        Card {count+1} / 10
      </div>  
        <button class = "button" onClick={() => setCount(count-1)}>&lt;-</button>
        <button class = "button" onClick={() => setCount(count+1)}>-&gt;</button>
      <div>
      <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
            <div onClick={() => setFlip(!flip)}
            class='front'>
                {CARDS[count].id}
            </div>
            <div onClick={() => setFlip(!flip)}
            class='back'>
                {CARDS[count].word}
            </div>
      </ReactCardFlip>
      </div>
    </div>
  )
}

const CARDS = [
  {
    id: "1",
    number: "1",
    word: "One",
  },
  {
    id: "2",
    number: "2",
    word: "Two"
  },
  {
    id: "3",
    number: "3",
    word:"Three"
  },
  {
    id: "4",
    number:"4",
    word:"Four"
  },
  {
    id: "5",
    number: "5",
    word:"Five"
  },
  {
    id: "6",
    number: "6",
    word:"Six"
  },
  {
    id: "7",
    number: "7",
    word:"Seven"
  },
  {
    id: "8",
    number: "8",
    word:"Eight"
  },
  {
    id: "9",
    number: "9",
    word:"Nine"
  },
  {
    id: "10",
    number: "10",
    word:"Ten"
  }
];
export default App