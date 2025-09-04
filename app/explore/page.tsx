"use client";

import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import {
  RocketIcon,
  FileTextIcon,
  PersonIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { BentoGrid, BentoCard } from "@/components/ui/bento";
import GridBeamsBackground from "@/components/GridBeamsBackground";
import LoadingPage from "@/components/LoadingPage"; 

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
if (!user) return <LoadingPage />;

  return (
    <GridBeamsBackground>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
       <header className="w-full flex justify-between items-center px-6 py-4 
  bg-white/10 backdrop-blur-lg border-b border-white/20 
  shadow-lg z-20 rounded-xl mx-4 mt-4">
  <h1 className="text-xl font-semibold text-white drop-shadow-md">
    Welcome, {user.name}
  </h1>
  <button
    onClick={handleLogout}
    className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 
      hover:from-red-600 hover:to-red-800 text-white font-medium 
      rounded-lg shadow-md transition-all duration-200"
  >
    Logout
  </button>
</header>
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-1 space-y-4">
          <div className="p-6">
            <BentoGrid className="grid-cols-2 auto-rows-[20rem] gap-6">
              <BentoCard
                name="Profile"
                description="Manage your account details, preferences, and personal info."
                href="/newsletter"
                cta="Go to Profile"
                Icon={PersonIcon}
                background={
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-100 to-purple-200" />
                }
                className="col-span-1"
              />
              <BentoCard
                name="Documents"
                description="Access and manage your files in one secure place."
                href="/documents"
                cta="View Docs"
                Icon={FileTextIcon}
                background={
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-200" />
                }
                className="col-span-1"
              />
              <BentoCard
                name="Projects"
                description="Keep track of your ongoing and completed projects."
                href="/projects"
                cta="See Projects"
                Icon={RocketIcon}
                background={
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-100 to-emerald-200" />
                }
                className="col-span-1"
              />
              <BentoCard
                name="Settings"
                description="Adjust system preferences, themes, and integrations."
                href="/settings"
                cta="Open Settings"
                Icon={GearIcon}
                background={
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 to-orange-200" />
                }
                className="col-span-1"
              />
            </BentoGrid>
          </div>
        </main>
      </div>
    </GridBeamsBackground>
  );
}
