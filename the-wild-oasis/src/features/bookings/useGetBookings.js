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

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : searchParams.get("page");

  const {
    isLoading,
    data: { data: bookings, count } = {},
    // error,
  } = useQuery({
    // this array worked a lot similar to use Effect dependencies
    queryKey: ["bookings", filter, sort, page],
    // here function should return promise
    queryFn: () => getBookings({ filter, sort, page }),
  });

  return { bookings, isLoading, count };
}
