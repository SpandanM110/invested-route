"use client";

import { useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import GridBeamsBackground from "@/components/GridBeamsBackground"; // ✅ import wrapper

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      router.push("/explore");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <GridBeamsBackground>
      <div className="relative min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/80 text-indigo-700 font-medium rounded-lg shadow hover:bg-white transition"
        >
          ← Return to Homepage
        </button>

        {/* Top Half */}
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6 text-center">
          {/* Optional Header Content */}
        </div>

        {/* Bottom Half (background now handled by GridBeams) */}
        <div className="flex-1" />

        {/* Login Box - Floating across halves */}
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
              Welcome Back 👋
            </h2>

            {error && (
              <p className="text-red-500 text-center text-sm mb-4">{error}</p>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Login
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => router.push("/auth/signup")}
                className="text-indigo-600 font-semibold cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </GridBeamsBackground>
  );
}
