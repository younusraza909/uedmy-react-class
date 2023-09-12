function NextButton({ nextQuestion, finishGame, answer, index, numQuestions }) {
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
