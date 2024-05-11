import { useEffect, useState } from 'react';

export const useRandomLetters = () => {
  const [randomLetters, setRandomLetters] = useState('𓅰');

  useEffect(() => {
    const characters = [
      'ᓚ₍ ^. .^₎',
      '(¬_¬")',
      '♡',
      '(╥﹏╥)',
      '•⩊•',
      '•ᴗ•',
      '(•ᴖ•｡)',
      '( ˘͈ ᵕ ˘͈♡)',
      '"૮₍ ˶•⤙•˶ ₎ა',
      '( • ᴖ • ｡)',
    ];
    const interval = setInterval(() => {
      const randomChars = Array.from({ length: 1 }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      ).join('');
      setRandomLetters(randomChars);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { randomLetters };
};