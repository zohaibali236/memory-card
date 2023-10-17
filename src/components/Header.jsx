export default function Header({current, best}) {
  return (
    <header className='mt-4'>
      <h1 className='text-3xl'>Memory Game</h1>
      <h2 className='ml-4 text-gray-600'>
        ~Earn Points by selecting a pokemon but dont select a pokemon twice
      </h2>
      <div className="flex justify-end">
          <div className="font-bold">
              <h3>Score: {current}</h3>
              <h3>Best Score: {best}</h3>
          </div>
      </div>
    </header>
  );
}
