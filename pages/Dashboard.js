import useSWR from 'swr';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';
import DashboardShell from '@/components/DashboardShell';
import Skeleton from '@/components/Skeleton';
import fetcher from '../utils/fetcher';
import SiteTable from '@/components/SiteTable';

const Dashoard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);
  if (!data)
    return (
      <DashboardShell>
        <Skeleton />
      </DashboardShell>
    );

  // render data
  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashoard;
