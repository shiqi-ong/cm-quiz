import Head from 'next/head';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Modernization Quiz</title>
      </Head>
      <h1>Cloud Modernization Quiz</h1>
      <Quiz />
    </div>
  );
}
