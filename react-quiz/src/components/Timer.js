import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

function Timer() {
  const { increaseTimer, secondsRemaining } = useQuiz();

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
