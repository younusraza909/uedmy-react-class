import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export default function useGetBookings() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const {
    isLoading,
    data: bookings,
    // error,
  } = useQuery({
    // this array worked a lot similar to use Effect dependencies
    queryKey: ["bookings", filter],
    // here function should return promise
    queryFn: () => getBookings({ filter }),
  });

  return { bookings, isLoading };
}
