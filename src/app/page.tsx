"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Login Page</h1>
      <button
        onClick={() => router.push("/people")}
        className="border border-neon p-2"
      >
        Show People
      </button>
    </main>
  );
}
