import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export default function useGetBookings() {
  const [searchParams] = useSearchParams();

  const queryClient = useQueryClient();

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
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  //QUERY
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

  // PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page + 1],

      queryFn: () => getBookings({ filter, sort, page: page + 1 }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sort, page - 1],

      queryFn: () => getBookings({ filter, sort, page: page - 1 }),
    });
  }

  return { bookings, isLoading, count };
}
