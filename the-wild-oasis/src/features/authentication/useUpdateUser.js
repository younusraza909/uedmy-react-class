import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateUser as updateUserApi } from "../../services/apiAuthentication";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isUserUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      queryClient.setQueryData(["user"], user);
    },
  });

  return { updateUser, isUserUpdating };
}
