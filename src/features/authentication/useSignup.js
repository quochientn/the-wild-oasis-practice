import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,

    onSuccess: () =>
      toast.success(
        "Create account successfully. Please verify account with your email!"
      ),

    onError: (error) => toast.error(error.message),
  });

  return { isLoading, signup };
}
