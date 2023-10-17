export default function Modal({ text, setGameState, setScore }) {
  return (
    <div className='fixed left-0 top-0 z-10 flex min-h-full min-w-full items-center justify-center bg-black/90'>
      <div className='flex h-40 w-96 flex-col items-center justify-center gap-7 rounded-xl bg-white opacity-100'>
        <h1 className='text-2xl'>{text}</h1>
        <button
          className='rounded-full bg-blue-500 px-5 py-2 text-white hover:bg-inherit hover:text-blue-500 hover:outline hover:outline-1 hover:outline-blue-500'
          onClick={() => {
            setGameState('');
            setScore(0);
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
