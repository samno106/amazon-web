"use client";
import { Github, Google, Facebook } from "@/components/icons/socails";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { useSigninModal } from "@/hooks/frontend/modals/auth/use-signin-modal";
import { useSignupModal } from "@/hooks/frontend/modals/auth/use-signup-modal";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoaderCircle } from "lucide-react";
import { sendMail } from "@/lib/send-mail";

const formSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must have than 6 characters"),
});

export const SignupModal = () => {
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();

  const [loginLoading, setLoginLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onRegister = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoginLoading(true);

      const response = await axios.post("api/auth/register", values);
      if (response.status === 200) {
        const mailText = `Name: ${
          values.firstName + " " + values.lastName
        }\n  Email: ${
          values.email
        }\nMessage: ${"Your confirm code is : 12345"}`;
        const response = await sendMail({
          email: values.email,
          subject: "New Contact Us Form",
          text: mailText,
        });

        toast({
          title: "Success",
          description: "Please check your email",
        });
        signupModal.onClose();
        signinModal.onOpen();
        form.reset();
      }
    } catch (error: any) {
      toast({
        title: "Opp! Something went wrong.",
        description: `${error.response.data.message}`,
      });
      console.log(error);
    } finally {
      setLoginLoading(false);
    }
  };

  const onCloseModal = () => {
    form.reset();
    signupModal.onClose();
  };

  return (
    <Modal
      title="Sign up"
      description=""
      isOpen={signupModal.isOpen}
      onClose={onCloseModal}
      size="w-[450px]"
    >
      <div className="w-full">
        {/* form  */}

        <div className="w-full space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onRegister)}
              className=" space-y-3"
            >
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-1 space-y-0">
                      <FormLabel className="text-[12px] text-[#787879]">
                        First name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          id="firstName"
                          placeholder="your first name"
                          className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-1 space-y-0">
                      <FormLabel className="text-[12px] text-[#787879]">
                        Last name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          id="lastName"
                          placeholder="your last name"
                          className="placeholder:text-[13px] border-[#ECECED] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                  type="submit"
                  className=" shadow-none text-xs w-full h-[40px]"
                  disabled={loginLoading}
                >
                  {loginLoading && (
                    <LoaderCircle className=" animate-spin size-3" />
                  )}
                  Create your account
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
          <p className="text-xs">Already have an account?</p>{" "}
          <Button
            variant={"link"}
            onClick={() => {
              signupModal.onClose();
              signinModal.onOpen();
            }}
            className="text-xs text-blue-500 px-1"
          >
            Sign in
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SignupModal;
