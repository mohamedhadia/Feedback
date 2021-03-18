import Head from 'next/head';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-gray-200 h-screen flex flex-col justify-center text-center">
        {auth?.user ? (
          <EmptyState />
        ) : (
          <button
            className="px-3 py-2 bg-gray-900 text-white inline-block w-auto mx-auto rounded-md"
            onClick={(e) => auth.signinWithGitHub()}
          >
            sign in
          </button>
        )}
      </main>
    </div>
  );
}

{
  /*           <button
            className="px-3 py-2 bg-green-700 text-white inline-block w-auto mx-auto rounded-md"
            onClick={(e) => auth.signout()}
          >
            sign out
          </button> */
}
