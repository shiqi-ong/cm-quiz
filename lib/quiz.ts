import { questions } from '../components/Quiz';

export function calculateScore(answers: number[]): number {
  let correct = 0;
  answers.forEach((ans, idx) => {
    if (ans === questions[idx].answer) correct += 1;
  });
  return (correct / questions.length) * 100;
}
