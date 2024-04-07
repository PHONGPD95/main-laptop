'use client';

import { useWindowSize } from 'react-use';

import TotalBalance from '@/components/Banners/TotalBalance';
import PageHeader from '@/layout/PageHeader';
import MainProfileInfo from '@/widgets/MainProfileInfo';
import SalesStats from '@/widgets/SalesStats';
import TotalReport from '@/widgets/TotalReport';

export default function Page() {
  const { width } = useWindowSize();

  return (
    <main>
      <PageHeader title="Dashboard" />

      <div className="widgets-grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-[minmax(0,_951px)_minmax(0,_1fr)]">
        <MainProfileInfo />
        {width >= 1536 && <TotalBalance />}
        <SalesStats />
        <TotalReport />
      </div>
    </main>
  );
}
