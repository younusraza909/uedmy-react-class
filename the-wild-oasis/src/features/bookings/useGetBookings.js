import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export default function useGetBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  // SORT

  const sortRaw = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortRaw.split("-");

  const sort = { field, direction };

  const {
    isLoading,
    data: bookings,
    // error,
  } = useQuery({
    // this array worked a lot similar to use Effect dependencies
    queryKey: ["bookings", filter, sort],
    // here function should return promise
    queryFn: () => getBookings({ filter, sort }),
  });

  return { bookings, isLoading };
}
