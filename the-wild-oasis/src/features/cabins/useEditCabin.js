import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export default function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinHandler, isLoading: isEditing } = useMutation({
    mutationFn: ({ data, id }) => createEditCabin(data, id),
    onSuccess: () => {
      toast.success("New cabin successfully editted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin: editCabinHandler };
}
