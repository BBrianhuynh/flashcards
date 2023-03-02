import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Buttons from "./Buttons"
function Flashcards() {
    const [flip, setFlip] = useState(false);
    var i = 0;
    return (
        <ReactCardFlip isFlipped={flip} 
            flipDirection="horizontal">
            <div onClick={() => setFlip(!flip)}
            class='front'>
                {CARDS[0].id}
            </div>
            <div onClick={() => setFlip(!flip)}
            class='back'>
                {CARDS[0].word}
            </div>
        </ReactCardFlip>
    );
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
  
export default Flashcards;