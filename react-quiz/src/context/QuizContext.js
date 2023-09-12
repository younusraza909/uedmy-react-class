import { createContext, useContext } from 'react';

const QuizContext = createContext();

const QuizContextProvider = ({ children }) => {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
};

const useQuiz = () => {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error('Context is used outside of provider');

  return context;
};

export { QuizContextProvider, useContext };
