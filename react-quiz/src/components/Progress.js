import React from 'react';
import { useQuiz } from '../context/QuizContext';

function Progress({ numQuestions, maxPossiblePoints }) {
  const { index, points, answer } = useQuiz();

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
