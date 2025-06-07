import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  answer: number;
}

const questions: Question[] = [
  {
    question: 'Which cloud model enables on-demand resource scaling?',
    options: ['Monolithic', 'Serverless', 'On-premises', 'Legacy'],
    answer: 1
  },
  {
    question: 'What is a key benefit of containerization?',
    options: ['Tight coupling', 'Improved portability', 'Manual scaling', 'Static allocation'],
    answer: 1
  },
  {
    question: 'CI/CD stands for?',
    options: ['Continuous Integration/Continuous Deployment', 'Compute Infrastructure/Cloud Development', 'Container Image/Cloud Distribution', 'Cloud Integration/Continuous Delivery'],
    answer: 0
  },
  {
    question: 'Which service model provides the highest level of abstraction?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    answer: 2
  },
  {
    question: 'Infrastructure as Code tools include:',
    options: ['Terraform', 'Photoshop', 'Excel', 'Word'],
    answer: 0
  }
];

function calculateScore(answers: number[]): number {
  let correct = 0;
  answers.forEach((ans, idx) => {
    if (ans === questions[idx].answer) correct += 1;
  });
  return (correct / questions.length) * 100;
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const score = calculateScore(answers);

  if (current >= questions.length) {
    return (
      <div>
        <h2>Your score: {score}%</h2>
        {score >= 80 ? (
          <div>
            <p>Congratulations! You won FREE swag from moderncloud.io.</p>
            {submitted ? (
              <p>Thanks for submitting your contact information.</p>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        ) : (
          <p>Thanks for taking the quiz!</p>
        )}
      </div>
    );
  }

  const q = questions[current];
  return (
    <div>
      <h2>{q.question}</h2>
      {q.options.map((opt, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              name={`q-${current}`}
              checked={answers[current] === i}
              onChange={() => {
                const newAnswers = [...answers];
                newAnswers[current] = i;
                setAnswers(newAnswers);
              }}
            />
            {opt}
          </label>
        </div>
      ))}
      <button onClick={() => setCurrent(current + 1)}>Next</button>
    </div>
  );
}

export { calculateScore, questions };
