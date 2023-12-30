import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './useRecentBookings';
import { useRecentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecentBookings();
  console.log('isLoading1', isLoading1, bookings);

  const { isLoading: isLoading2, stays } = useRecentStays();
  console.log('isLoading2', isLoading2, stays);

  if (isLoading1 || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>
        <p>Chart 1</p>
      </div>
      <div>
        <p>Chart 2</p>
      </div>
      <div>
        <p>Chart 3</p>
      </div>
      <div>
        <p>Chart 4</p>
      </div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
