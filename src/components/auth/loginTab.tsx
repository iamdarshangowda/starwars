import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { noAuthPost } from "../../config/axiosClient";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await noAuthPost("user/login", formData).then((data) => {
        const token = data.data.accessToekn;
        localStorage.setItem("todoAuthToken", JSON.stringify(token));
        router.replace("/people");
        setLoading(false);
      });
    } catch (error: any) {
      // console.log(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-secondaryLight to-accentDark rounded-xl shadow-lg">
      <h1 className="text-heading-2/h1 text-grey-0 text-center mb-10">Login</h1>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSignIn}
      >
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="px-2 py-1 border-none rounded-lg"
          placeholder="Enter your Email"
          required
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          className="px-2 py-1 border-none rounded-lg"
          placeholder="Enter your Password"
          required
        />
        <button className="text-grey-9 p-2 w-[100px] border bg-neon text-body-2/b2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
