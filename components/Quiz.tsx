import { useState } from 'react';
import { questions, calculateScore } from '../lib/quiz';

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

