import { Github, Google, Facebook } from "@/components/icons/socails";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "@/components/ui/modal";
import { useSigninModal } from "@/hooks/frontend/modals/auth/use-signin-modal";
import { useSignupModal } from "@/hooks/frontend/modals/auth/use-signup-modal";
import { signIn } from "next-auth/react";

export const SignupModal = () => {
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();

  return (
    <Modal
      title="Sign up"
      description=""
      isOpen={signupModal.isOpen}
      onClose={signupModal.onClose}
      size="w-[450px]"
    >
      <div className="w-full">
        {/* form  */}

        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 gap-5">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstName" className="text-[12px] text-[#787879]">
                First name
              </Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Your first name"
                className=" placeholder:text-[13px] border-[#ECECED]] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastName" className="text-[12px] text-[#787879]">
                Last name
              </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Your last name"
                className="placeholder:text-[13px] border-[#ECECED]] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email" className="text-[12px] text-[#787879]">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="placeholder:text-[13px] border-[#ECECED]] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password" className="text-[12px] text-[#787879]">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="••••••••"
              className="border-[#ECECED]] bg-[#FBFBFC] focus-visible:ring-[#ECECED] shadow-none h-[40px] placeholder:text-gray-400"
            />
          </div>
          <div className="pt-2">
            <Button className=" shadow-none text-xs w-full h-[40px]">
              Create your account
            </Button>
          </div>
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
