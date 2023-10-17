import { useEffect, useState } from 'react';

function CreateCard({ name, onClick }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    getImage(name).then((res) => setSrc(res));
  }, [name]);

  return (
    <div
      className='flex h-52 w-52 md:w-56 flex-col gap-4 rounded-md border-2 border-blue-300 bg-blue-300 p-1 transition-transform hover:scale-105 hover:cursor-pointer md:h-80'
      onClick={onClick}
    >
      <div className='flex items-center justify-center border-2'>
        <img
          className='w-32 md:w-full'
          src={src}
          alt={`A picture of ${name}`}
        />
      </div>
      <p className='text-center text-2xl italic text-white'>{name}</p>
    </div>
  );
}

export default function Cards({
  currentScore,
  setScore,
  setBestScore,
  gameState,
  setGameState,
}) {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then((response) => response.json())
      .then((result) => {
        result = result.results.map((i) => i.name);

        setPokemons([...result]);
      });
  }, [gameState]);

  return (
    <main className='grid grid-cols-1 place-items-center gap-y-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
      {pokemons.map((i, index) => {
        if (index >= 5) return null;
        return (
          <CreateCard
            key={i}
            name={i}
            onClick={() => {
              if (selected.includes(i)) {
                setGameState('Lost');
                setBestScore(currentScore);
                setSelected([]);
                setScore(0);
                console.log(selected);
              } else {
                setScore((score) => score + 1);
                setSelected((list) => [...list, i]);
                setPokemons([...pokemons.sort(() => Math.random() - 0.5)]);
              }
            }}
          />
        );
      })}
    </main>
  );
}

async function getImage(pokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );
    const data = await response.json();

    return data.sprites.other['official-artwork']['front_default'];
  } catch (err) {
    console.errorr(err);
  }
}
