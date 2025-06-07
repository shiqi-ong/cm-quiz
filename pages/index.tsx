import Head from 'next/head';
import Quiz from '../components/Quiz';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Head>
        <title>Cloud Modernization Quiz</title>
      </Head>
      <main className="max-w-2xl mx-auto py-10 px-4 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Cloud Modernization Quiz</h1>
        <p className="text-gray-700">
          Test your modernization knowledge and see if you qualify for free swag
          from moderncloud.io.
        </p>
        <Quiz />
      </main>
    </div>
  );
}
