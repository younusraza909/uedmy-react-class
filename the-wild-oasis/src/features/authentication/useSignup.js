import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuthentication";

export default function useSignup() {
    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            toast.success("User created successfully, to verify please check email of recent created user");
        },
        onError: (err) => {
            console.log("ERROR", err);
            toast.error("Something went wrong while creating user");
        },
    });

    return { signup, isLoading };
}
