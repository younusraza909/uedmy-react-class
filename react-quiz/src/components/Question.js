import Options from '../components/Options';
import { useQuiz } from '../context/QuizContext';

function Question() {
  const { questions, index, answer, newAnswer } = useQuiz();

  let question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} newAnswer={newAnswer} answer={answer} />
    </div>
  );
}

export default Question;
