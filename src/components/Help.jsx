import { useRef } from 'react';

export default function Help({ setShowHelp }) {
  const modalContainer = useRef(null);
  return (
    <div
      ref={modalContainer}
      className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/75'
      onClick={({ target }) => {
        target === modalContainer.current && setShowHelp(false);
      }}
    >
      <div className='h-72 w-96 rounded-xl bg-white p-4'>
        <div className='flex justify-between'>
          <h1 className='flex items-center text-2xl'>How to Play</h1>
          <button
            className='flex items-center justify-center text-3xl text-slate-400'
            onClick={() => setShowHelp(false)}
          >
            &times;
          </button>
        </div>
        <div className='mt-3'>
          <ul className='list-outside list-disc px-4'>
            <li>Correct selection: +1 point</li>
            <li>
              Incorrect selection (choosing a card you&apos;ve picked before):
              Game over, 0 points
            </li>
          </ul>
          <p className='mt-4'>
            To win the game, you need to accumulate 20 points without making any
            incorrect selections. Good luck with your memory challenge!
          </p>
          {/* <p>
            In the Pokémon Memory Game, you&apos;ll have a set of 20 Pokémon
            cards. Five cards will be displayed at a time, and your task is to
            select the card you haven&apos;t chosen before to gain +1 score. If
            you select a card you&apos;ve previously picked, you&apos;ll lose
            the game. Your aim is to reach a score of 20 to secure a win. Test
            your memory skills and enjoy the challenge! Good luck!
          </p> */}
        </div>
      </div>
    </div>
  );
}
