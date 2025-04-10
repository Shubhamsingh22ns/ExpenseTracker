import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <p className="text-gray-600 text-center mb-6">
          Join us today and start managing your finances efficiently!
        </p>
        <SignUp />
      </div>
    </div>
  );
}
