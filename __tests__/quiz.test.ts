import { calculateScore } from '../lib/quiz';

test('calculateScore returns correct percentage', () => {
  const answers = [1, 1, 0, 2, 0];
  expect(calculateScore(answers)).toBe(100);
});

