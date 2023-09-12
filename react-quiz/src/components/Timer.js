import { useEffect } from 'react';

function Timer({ increaseTimer, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        increaseTimer();
      }, 1000);

      return () => clearInterval(id);
    },
    [increaseTimer]
  );

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
