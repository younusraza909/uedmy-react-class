import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export default function useGetBookings() {
  const {
    isLoading,
    data: bookings,
    // error,
  } = useQuery({
    queryKey: ["bookings"],
    // here function should return promise
    queryFn: getBookings,
  });

  return { bookings, isLoading };
}
