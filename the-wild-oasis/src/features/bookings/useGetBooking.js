import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

export default function useGetBooking() {
  const { bookingId } = useParams();
  const {
    isLoading,
    data: booking,
    // error,
  } = useQuery({
    queryKey: ["booking"],
    // here function should return promise
    queryFn: () => getBooking(bookingId),
  });

  return { booking, isLoading };
}
