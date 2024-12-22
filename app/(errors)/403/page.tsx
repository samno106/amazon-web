import { Home, Lock } from "lucide-react";
import Link from "next/link";

export const AccessDeniedPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-red-100 p-4 rounded-full">
            <Lock className="h-12 w-12 text-red-600" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-xl font-extrabold text-gray-900 ">
            Access Denied
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            You do not have permission to view this page.
          </p>
        </div>

        <div className="mt-8  flex justify-center ">
          <Link
            href={"/"}
            className="flex justify-center items-center space-x-2 bg-primary hover:bg-primary/85 py-2 px-4 rounded text-white"
          >
            <Home className="size-5" />
            <span> Go to Home</span>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>
            If you believe this is a mistake, please contact your administrator.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AccessDeniedPage;
