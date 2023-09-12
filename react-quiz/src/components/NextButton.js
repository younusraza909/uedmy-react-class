import { useQuiz } from '../context/QuizContext';

function NextButton({ numQuestions }) {
  const { index, answer, finishGame, nextQuestion } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => nextQuestion()}>
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button className='btn btn-ui' onClick={() => finishGame()}>
        Finish
      </button>
    );
  }
}

export default NextButton;
