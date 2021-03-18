import AddSiteModal from './AddSiteModal';
import DashboardShell from './DashboardShell';

export default function EmptyState() {
  return (
    <>
      <DashboardShell>
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
      </DashboardShell>
    </>
  );
}
