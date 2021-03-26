import React from 'react';
import { createSite } from '@/lib/db';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/lib/auth';
import useSWR, { mutate } from 'swr';
import fetcher from '../utils/fetcher';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddSiteModal() {
  const [showModal, setShowModal] = React.useState(false);
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  const onSubmit = ({ name, link }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      link
    };
    createSite(newSite);

    toast.success('🦄 Site has been added successfully!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
    mutate(
      ['/api/sites', auth.user.token],
      async (data) => {
        return { sites: [...data.sites, newSite] };
      },
      false
    );
  };

  return (
    <>
      <button
        className="bg-gray-900 text-white px-3 py-2 font-semibold "
        type="button"
        style={{ transition: 'all 1s ease' }}
        onClick={() => setShowModal(true)}
      >
        Add site
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Site</h3>
                  <button
                    className="p-1 ml-auto  text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-gray-900 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="relative px-6 py-8 flex-auto"
                >
                  <div className="flex-col mb-8">
                    <label htmlFor="name">Name:</label>
                    <input
                      id="name"
                      name="name"
                      className=" border-2 rounded-r px-4 py-2 w-full mt-2"
                      type="text"
                      placeholder="My website"
                      ref={register({ required: true })}
                    />
                  </div>
                  <div className="flex-col ">
                    <label htmlFor="link">Link:</label>
                    <input
                      id="link"
                      name="link"
                      className=" border-2 rounded-r px-4 py-2 w-full mt-2"
                      type="text"
                      placeholder="https://website.com"
                      ref={register({ required: true })}
                    />
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6  rounded-b">
                    <button
                      className="text-red-500 background-transparent font-semibold uppercase  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1  tracking-widest"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="bg-gray-900 cursor-pointer text-white font-semibold uppercase  text-sm px-6 py-3 outline-none focus:outline-none mr-1 mb-1 tracking-widest"
                    >
                      Create
                    </button>
                    <ToastContainer />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
