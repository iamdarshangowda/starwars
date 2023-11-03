"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log({ formData });
    router.push("/people");
  };

  return (
    <main className="flex h-full flex-col items-center justify-center p-4 gap-10 -translate-y-28">
      <div className="p-8 bg-secondaryLight rounded-xl shadow-lg">
        <h1 className="text-heading-2/h1 text-grey-0 text-center mb-10">
          Login
        </h1>
        <form
          className="flex flex-col items-center gap-6"
          onSubmit={handleLogin}
        >
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            className="p-2 border-none rounded-lg"
            placeholder="email"
          />
          <input
            name="password"
            type="text"
            value={formData.password}
            onChange={handleInputChange}
            className="p-2 border-none rounded-lg"
            placeholder="password"
          />
          <button className="text-grey-9 p-2 w-[100px] border bg-neon text-body-1/b2 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
