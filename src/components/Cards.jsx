import { useEffect, useState } from 'react';

const N = 20;

function CreateCard({ name, onClick }) {
  const [src, setSrc] = useState('');

  useEffect(() => {
    getImage(name).then((res) => setSrc(res));
  }, [name]);

  return (
    <div
      className='flex h-52 w-52 flex-col gap-4 rounded-md border-2 border-blue-300 bg-blue-300 p-1 transition-transform hover:scale-105 hover:cursor-pointer md:h-80 md:w-56'
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
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${N}&offset=0`)
      .then((response) => response.json())
      .then((result) => {
        result = result.results.map((i) => i.name);

        setPokemons([...result]);
      });
  }, [gameState]);

  const list = pokemons.filter((i, index) => {
    return index < 5;
  });

  useEffect(() => {
    console.log(currentScore);
    if (currentScore === N) {
      setGameState('Win');
      setBestScore(currentScore);
      setSelected([]);
      setScore(0);
    }
  }, [currentScore, setGameState, setBestScore, setScore]);

  return (
    <>
      {list.map((i) => {
        if (selected.length !== N && list.every((i) => selected.includes(i))) {
          setPokemons((p) => [...p.sort(() => Math.random() - 0.5)]);
        }
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
                // console.log(selected);
              } else {
                setScore((score) => score + 1);
                setSelected((list) => [...list, i]);
                setPokemons([...pokemons.sort(() => Math.random() - 0.5)]);
              }
            }}
          />
        );
      })}
    </>
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
