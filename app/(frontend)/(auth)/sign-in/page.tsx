import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const SigninPage = () => {
  return (
    <div>
      <h2>Signin Page</h2>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <Button type="submit">Sign in with Google</Button>
      </form>
    </div>
  );
};

export default SigninPage;
