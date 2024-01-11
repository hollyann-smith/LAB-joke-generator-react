import React, { useState } from 'react';
import getJoke from '../api/jokeData';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');
  const [deliveryButton, setDeliveryButton] = useState(false);
  const [jokeButton, setJokeButton] = useState(true);
  console.warn('joke', joke);
  const handleClick = async () => {
    const jokeData = await getJoke();
    setJoke(jokeData.setup);
    setPunchline(jokeData.delivery);
    setDeliveryButton(true);
    setJokeButton(false);
  };

  const punchlineClick = () => {
    setDeliveryButton(false);
    setJokeButton(true);
  };
  return (
    <div>
      <>
        {jokeButton ? (
          <button type="button" onClick={handleClick}>Get a joke</button>) : (
            <p>{joke}</p>)}

        {deliveryButton ? (
          <button type="button" onClick={punchlineClick}>Show Punchline</button>
        ) : (
          <><p>{joke}</p><p>{punchline}</p></>
        )}

      </>
    </div>
  );
};
export default JokeGenerator;
