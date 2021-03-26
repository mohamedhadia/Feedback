import Link from 'next/link';

export default function FeedbackLink({ siteId }) {
  return (
    <div>
      <div className="flex justify-center w-full mb-8 mt-2">
        <Link href={`/p/${siteId}`}>
          <a>Leave a comment</a>
        </Link>
        <Link href="/">
          <a>Powered by Feedback</a>
        </Link>
      </div>
    </div>
  );
}
