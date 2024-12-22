import { Facebook, Github, Google } from "@/components/icons/socails";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useSigninModal } from "@/hooks/frontend/modals/auth/use-signin-modal";
import { useSignupModal } from "@/hooks/frontend/modals/auth/use-signup-modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must have than 6 characters"),
});

export const SigninModal = () => {
  const signinModal = useSigninModal();
  const signupModal = useSignupModal();

  const { toast } = useToast();

  const router = useRouter();

  const [loginLoading, setLoginLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignin = async (values: z.infer<typeof formSchema>) => {
    setLoginLoading(true);

    const signinData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signinData?.error) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Your credential is in",
      });
      setLoginLoading(false);
    } else {
      setLoginLoading(false);
      router.refresh();
      signinModal.onClose();
      form.reset();
    }
  };

  const onCloseModal = () => {
    form.reset();
    signinModal.onClose();
  };

  return (
    <Modal
      title="Sign in"
      description=""
      isOpen={signinModal.isOpen}
      onClose={onCloseModal}
      size="w-[450px]"
    >
      <div className="w-full">
        {/* form  */}
        <div className="w-full space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSignin)} className=" space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid w-full items-center gap-1 space-y-0">
                    <FormLabel className="text-[12px] text-[#787879]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        id="email"
                        placeholder="you@example.com"
                        className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid w-full items-center gap-1 space-y-0">
                    <FormLabel className="text-[12px] text-[#787879]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        id="password"
                        placeholder="••••••••"
                        className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-2">
                <Button
                  className=" shadow-none text-xs w-full h-[40px] disabled:bg-primary"
                  disabled={loginLoading}
                >
                  {loginLoading && (
                    <LoaderCircle className=" animate-spin size-3" />
                  )}
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
        </div>
        {/* form  */}
        <div className="relative mt-8 w-full h-10 flex items-center justify-center ">
          <div className="text-[12px] text-[#787879] font-medium text-center bg-white px-3 z-10">
            OR CONTINUE WITH
          </div>
          <div className="w-full border-t absolute top-[50%] z-0"></div>
        </div>

        <div className="py-2 flex items-center justify-center space-x-4">
          <Button
            variant="ghost"
            className="py-2 w-[120px] rounded-md border border-[#DEEAFF] flex items-center space-x-1 hover:bg-gray-50"
          >
            <Facebook />
            <span className="text-xs font-medium">Facebook</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => signIn("google")}
            className="py-2 w-[120px] rounded-md border border-[#DEEAFF] flex items-center space-x-1 hover:bg-gray-50"
          >
            <Google />
            <span className="text-xs font-medium">Google</span>
          </Button>
          <Button
            onClick={() => signIn("github")}
            variant="ghost"
            className="py-2 w-[120px] rounded-md border border-[#DEEAFF] flex items-center space-x-1 hover:bg-gray-50"
          >
            <Github />
            <span className="text-xs font-medium">GitHub</span>
          </Button>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <p className="text-xs">No account?</p>{" "}
          <Button
            variant={"link"}
            onClick={() => {
              signinModal.onClose();
              signupModal.onOpen();
            }}
            className="text-xs text-blue-500 px-1"
          >
            Create one
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SigninModal;
