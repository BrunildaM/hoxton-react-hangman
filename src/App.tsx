import { useEffect, useState } from "react";
import "./App.css";

const letters = 'abcdefghijklmnopqrstuvwxyz'

function App() {
  const [word, setWord] = useState("albania");
  const [guesses, setGuesses] = useState(["a", "s", "e"]);

  let wrongGuesses = guesses.filter((guess) => !word.includes(guess));
  let correcGuesses = guesses.filter((guess) => word.includes(guess));

  const lives = 6- wrongGuesses.length


  useEffect(()=> {
    window.addEventListener('keydown', e => {
      let guess = e.key.toLowerCase()
      if(letters.includes(guess)) {
        setGuesses(guesses => {
          if (guesses.includes(guess)) return guesses
          return [...guesses,guess]})

      }
    })
  }, [])

  return (
    <div className="App">
      <div className="word">
        {word.split("").map((char, index) => (
          <span key={index}>{correcGuesses.includes(char) ? char : "_"} </span>
        ))}
      </div>
      <p>Wrong guesses: {wrongGuesses}</p>
      <p>Lives: {lives} </p>
    </div>
  );
}

export default App;
