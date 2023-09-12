import { createContext, useContext, useEffect, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  questions: [],
  // "loading","error","ready","active","finished"
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondsRemaining: null,
  highscore: 0,
};

const SECS_PER_QUESTION = 20;

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      let question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finish',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case 'restart':
      return {
        ...state,
        index: 0,
        answer: null,
        points: 0,
        status: 'ready',
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finish' : state.status,
      };
    default:
      throw new Error('Action unknown');
  }
}

const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'dataReceived', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'dataFailed' });
      });
  }, []);

  const startGame = () => {
    dispatch({ type: 'start' });
  };

  const newAnswer = (index) => {
    dispatch({ type: 'newAnswer', payload: index });
  };

  const finishGame = () => {
    dispatch({ type: 'finish' });
  };

  const nextQuestion = () => {
    dispatch({ type: 'nextQuestion' });
  };

  const increaseTimer = () => {
    dispatch({ type: 'tick' });
  };

  const restart = () => {
    dispatch({ type: 'restart' });
  };

  return (
    <QuizContext.Provider
      value={{
        ...state,
        startGame,
        newAnswer,
        finishGame,
        nextQuestion,
        increaseTimer,
        restart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('Context is used outside of provider');

  return context;
};

export { QuizContextProvider, useQuiz };
