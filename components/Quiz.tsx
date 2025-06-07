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
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Your score: {score}%</h2>
        {score >= 80 ? (
          <div className="space-y-4">
            <p className="text-green-600 font-medium">
              Congratulations! You won FREE swag from moderncloud.io.
            </p>
            {submitted ? (
              <p>Thanks for submitting your contact information.</p>
            ) : (
              <form
                className="space-y-4"
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-1 font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="border rounded p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="border rounded p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
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
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">{q.question}</h2>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <label key={i} className="flex items-center space-x-2">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-blue-600"
              name={`q-${current}`}
              checked={answers[current] === i}
              onChange={() => {
                const newAnswers = [...answers];
                newAnswers[current] = i;
                setAnswers(newAnswers);
              }}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        onClick={() => setCurrent(current + 1)}
      >
        {current === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

