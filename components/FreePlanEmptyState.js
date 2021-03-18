import DashboardShell from './DashboardShell';

export default function FreePlanEmptyState() {
  return (
    <>
      <DashboardShell>
        <h3 className="items-baseline text-3xl font-bold">
          get feedback on your site instantly
        </h3>
        <p className="items-baseline text-xl">start today and grow with us </p>
        <button className="bg-gray-900 text-white px-3 py-2 ">
          upgrade to starter
        </button>
      </DashboardShell>
    </>
  );
}
