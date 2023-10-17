import { useState } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState('');

  return (
    <>
      {gameState !== '' && (
        <Modal text={`You ${gameState}`} {...{ setGameState, setScore }} />
      )}
      <Header current={score} best={bestScore} />
      <Cards
        {...{
          currentScore: score,
          setScore,
          setBestScore,
          gameState,
          setGameState,
        }}
      />
      <Footer />
    </>
  );
}
