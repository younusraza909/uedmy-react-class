import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import useGetCabins from '../cabins/useGetCabins';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();

  const {
    isLoading: isLoading2,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  console.log('isLoading2', isLoading2, stays);

  const { isLoading: isLoading3, cabins } = useGetCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>
        <p>Chart 2</p>
      </div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
