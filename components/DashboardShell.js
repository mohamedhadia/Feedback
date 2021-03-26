import { useAuth } from '@/lib/auth';
import Link from 'next/link';
import AddSiteModal from './AddSiteModal';

export default function DashboardShell({ children }) {
  const auth = useAuth();
  return (
    <div className="h-screen bg-gray-200 overflow-hidden">
      <nav className="bg-white">
        <div className="container mx-auto flex items-center py-8 justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8"
              >
                <path d="M480 117.333h-53.333v21.333H480c5.891 0 10.667 4.776 10.667 10.667v256c0 5.891-4.776 10.667-10.667 10.667H330.667a10.67 10.67 0 00-7.541 3.125l-24.459 24.459v-16.917c0-5.891-4.776-10.667-10.667-10.667H138.667c-5.891 0-10.667-4.776-10.667-10.667v-32h-21.333v32c0 17.673 14.327 32 32 32h138.667v32c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 007.541-3.125l39.541-39.541H480c17.673 0 32-14.327 32-32v-256c0-17.674-14.327-32.001-32-32.001z" />
                <path d="M373.333 32H32C14.327 32 0 46.327 0 64v256c0 17.673 14.327 32 32 32h149.333v32c0 5.891 4.776 10.667 10.667 10.667a10.67 10.67 0 007.541-3.125L239.083 352h134.251c17.673 0 32-14.327 32-32V64c-.001-17.673-14.328-32-32.001-32zM384 320c0 5.891-4.776 10.667-10.667 10.667H234.667a10.67 10.67 0 00-7.541 3.125l-24.459 24.459v-16.917c0-5.891-4.776-10.667-10.667-10.667H32c-5.891 0-10.667-4.776-10.667-10.667V64c0-5.891 4.776-10.667 10.667-10.667h341.333C379.224 53.333 384 58.109 384 64v256z" />
                <path d="M53.333 117.333h117.333v21.333H53.333zM53.333 181.333H352v21.333H53.333zM53.333 245.333H352v21.333H53.333zM330.667 117.333H352v21.333h-21.333zM288 117.333h21.333v21.333H288z" />
              </svg>
              <h1 className="text-center text-2xl md:text-3xl ml-2 font-semibold">
                <Link href="/">
                  <a>Feedback</a>
                </Link>
              </h1>
            </div>

            <ul className="flex ml-4 md:ml-8 text-sm  md:text-lg font-semibold items-center">
              <li className="md:ml-8 ml-2 ">
                <Link href="/Dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li className="md:ml-8 ml-2">Contact</li>
            </ul>
          </div>

          <div className="text-lg font-semibold flex items-center">
            {auth?.user ? (
              <div className="flex">
                <button
                  className="px-3 py-2 bg-gray-900 text-white inline-block w-auto mx-auto rounded-md"
                  onClick={(e) => auth.signout()}
                >
                  sign out
                </button>
                <div className="w-12 h-12  ml-4">
                  <div className="group w-full h-full rounded-full overflow-hidden shadow-inner cursor-pointer">
                    <img
                      src={auth.user?.photoURL}
                      alt="lovely avatar"
                      className="object-cover object-center w-full h-full "
                    />
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="px-3 py-2 bg-gray-900 text-white inline-block w-auto mx-auto rounded-md"
                onClick={(e) => auth.signinWithGitHub()}
              >
                sign in
              </button>
            )}
          </div>
        </div>
      </nav>

      <section className="container mx-auto mt-20">
        <div className="flex justify-between">
          <div className="flex flex-col items-start py-8">
            <h5 className="items-baseline text-xl">sites</h5>
            <h3 className="items-baseline text-3xl font-bold">My Sites</h3>
          </div>
          <div className="flex items-center">
            <AddSiteModal />
          </div>
        </div>

        {children}
      </section>
    </div>
  );
}
