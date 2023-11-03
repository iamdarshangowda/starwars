"use client";
import Login from "@components/auth/loginTab";
import SignUp from "@components/auth/signUpTab";
import { useState } from "react";

export default function Home() {
  const [isSignUp, setISignUp] = useState(true);

  return (
    <main className="flex h-full flex-col items-center justify-center p-4 gap-10 -translate-y-28">
      {isSignUp ? <SignUp /> : <Login />}
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-grey-0 text-body-3/b2">
          {isSignUp ? "Already have an account?" : "Dont have account?"}
        </p>
        <button
          className="p-1 w-[80px] bg-accentLight rounded-md text-body-3/b2"
          onClick={() => setISignUp((prev) => !prev)}
        >
          {isSignUp ? "Login" : "SignUp"}
        </button>
      </div>
    </main>
  );
}
