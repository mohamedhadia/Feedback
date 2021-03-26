import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Feedback from '@/components/Feedback';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import { useAuth } from '@/lib/auth';
import { createFeedback } from '@/lib/db';

export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedback } = await getAllFeedback(siteId);
  return {
    props: {
      initialFeedback: feedback
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const { sites } = await getAllSites();
  const paths = sites.map((site) => ({
    params: {
      siteId: site.id
    }
  }));
  return {
    paths,
    fallback: false
  };
}

const SiteFeedback = ({ initialFeedback }) => {
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  const router = useRouter();
  const [allFeedback, setAllFeedback] = useState(initialFeedback);

  const onSubmit = ({ comment }) => {
    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      siteId: router.query.siteId,
      text: comment,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      status: 'pending'
    };
    setAllFeedback([newFeedback, ...allFeedback]);
    createFeedback(newFeedback);
  };
  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-3xl mx-auto p-3"
    >
      <form className="py-8 flex-auto">
        <div className="flex-col">
          <label htmlFor="comment">Comment</label>
          <input
            id="comment"
            name="comment"
            className=" border-2 rounded-r px-4 py-2 w-full mt-2"
            type="text"
            placeholder="write your comment here"
            ref={register({ required: true })}
          />
          <button
            type="submit"
            className="bg-gray-900 cursor-pointer text-white font-semibold capitalize  text-sm px-4 py-3 mt-2 outline-none focus:outline-none  mb-1 tracking-wide"
          >
            Add comment
          </button>
        </div>
      </form>

      {allFeedback.map((feedback, index) => (
        <Feedback key={index} {...feedback} />
      ))}
    </div>
  );
};

export default SiteFeedback;
