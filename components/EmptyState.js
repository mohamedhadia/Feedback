import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

export default function EmptyState() {
  return (
    <>
      <div className="flex flex-col shadow-sm justify-center items-center py-20 rounded-lg bg-white text-gray-900">
        <h3 className="items-baseline text-3xl font-bold">
          You haven't added any sites
        </h3>
        <p className="items-baseline text-xl py-2">
          wlcome 👋 lest get started{' '}
        </p>
        <AddSiteModal />
        {/* <button className="bg-gray-900 text-white px-3 py-2 ">
          add your first site
        </button> */}
      </div>
    </>
  );
}
