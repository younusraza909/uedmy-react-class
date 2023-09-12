import Options from '../components/Options';

function Question({ question, newAnswer, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} newAnswer={newAnswer} answer={answer} />
    </div>
  );
}

export default Question;
