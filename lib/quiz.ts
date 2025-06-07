export interface Question {
  question: string;
  options: string[];
  answer: number;
}

export const questions: Question[] = [
  {
    question: 'Which cloud model enables on-demand resource scaling?',
    options: ['Monolithic', 'Serverless', 'On-premises', 'Legacy'],
    answer: 1,
  },
  {
    question: 'What is a key benefit of containerization?',
    options: [
      'Tight coupling',
      'Improved portability',
      'Manual scaling',
      'Static allocation',
    ],
    answer: 1,
  },
  {
    question: 'CI/CD stands for?',
    options: [
      'Continuous Integration/Continuous Deployment',
      'Compute Infrastructure/Cloud Development',
      'Container Image/Cloud Distribution',
      'Cloud Integration/Continuous Delivery',
    ],
    answer: 0,
  },
  {
    question: 'Which service model provides the highest level of abstraction?',
    options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'],
    answer: 2,
  },
  {
    question: 'Infrastructure as Code tools include:',
    options: ['Terraform', 'Photoshop', 'Excel', 'Word'],
    answer: 0,
  },
];

export function calculateScore(answers: number[]): number {
  let correct = 0;
  answers.forEach((ans, idx) => {
    if (ans === questions[idx].answer) correct += 1;
  });
  return (correct / questions.length) * 100;
}
