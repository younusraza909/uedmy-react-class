import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';
import { useQuiz } from './context/QuizContext';

const initialState = {
  // "loading","error","ready","active","finished"
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
  highscore: 0,
};

const SECS_PER_QUESTION = 20;

function reducer(state, action) {
  switch (action.type) {
  }
}

function App() {
  const {
    questions,
    status,
    startGame,
    index,
    points,
    answer,
    newAnswer,
    finishGame,
    nextQuestion,
    increaseTimer,
    highscore,
    secondsRemaining,
    restart,
  } = useQuiz();

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} startGame={startGame} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              maxPossiblePoints={maxPossiblePoints}
            />
            <Question
              question={questions[index]}
              newAnswer={newAnswer}
              answer={answer}
            />
            <Footer>
              <Timer
                increaseTimer={increaseTimer}
                secondsRemaining={secondsRemaining}
              />
              <NextButton
                nextQuestion={nextQuestion}
                finishGame={finishGame}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === 'finish' && (
          <FinishScreen
            points={points}
            highscore={highscore}
            restart={restart}
            maxPossiblePoints={maxPossiblePoints}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
