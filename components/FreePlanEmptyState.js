import DashboardShell from './DashboardShell';

export default function FreePlanEmptyState() {
  return (
    <>
      <DashboardShell>
        <div className="flex flex-col shadow-sm justify-center items-center py-20 rounded-lg bg-white text-gray-900">
          <h3 className="items-baseline text-3xl font-bold">
            get feedback on your site instantly
          </h3>
          <p className="items-baseline text-xl">
            start today and grow with us{' '}
          </p>
          <button className="bg-gray-900 text-white px-3 py-2 ">
            upgrade to starter
          </button>
        </div>
      </DashboardShell>
    </>
  );
}
