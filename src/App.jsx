import { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState('');

  useEffect(() => {
    gameState === ''
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden');
  }, [gameState]);

  return (
    <>
      {gameState !== '' && (
        <Modal text={`You ${gameState}`} {...{ setGameState, setScore }} />
      )}
      <Header current={score} best={bestScore} />{' '}
      <main className='flex flex-wrap justify-center gap-4'>
        <Cards
          {...{
            currentScore: score,
            setScore,
            setBestScore,
            gameState,
            setGameState,
          }}
        />
      </main>
      <Footer />
    </>
  );
}
