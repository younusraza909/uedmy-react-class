import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useGetSetting() {
  const {
    isLoading,
    data: settings,
    // error,
  } = useQuery({
    queryKey: ["settings"],
    // here function should return promise
    queryFn: getSettings,
  });

  return { isLoading, settings };
}
