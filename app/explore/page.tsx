"use client";

import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const current = await account.get();
        setUser(current);
      } catch (err) {
        router.push("/auth/login"); // redirect if not logged in
      }
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await account.deleteSession("current");
    router.push("/auth/login");
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
