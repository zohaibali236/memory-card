import { useState, useEffect } from 'react';
import Help from './Help';

export default function Header({ current, best }) {
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (showHelp) document.body.classList.add('overflow-hidden');
    else document.body.classList.remove('overflow-hidden');
  }, [showHelp]);

  return (
    <>
      {showHelp && <Help {...{ setShowHelp }} />}
      <header className='mt-4'>
        <div className='flex'>
          <h1 className='text-3xl'>Memory Game</h1>
          <button
            className='ml-auto h-10 w-10 animate-bounce rounded-[100%] bg-blue-500 text-2xl text-white'
            onClick={({ target }) => {
              setShowHelp(true);
              target.classList.remove('animate-bounce');
            }}
          >
            ?
          </button>
        </div>
        {/* <h2 className='ml-4 text-gray-600'>
         ~Earn Points by selecting a pokemon but dont select a pokemon twice
      </h2> */}
        <div className='mt-5 flex justify-end'>
          <div className='font-bold'>
            <h3>Score: {current}</h3>
            <h3>Best Score: {best}</h3>
          </div>
        </div>
      </header>
    </>
  );
}
