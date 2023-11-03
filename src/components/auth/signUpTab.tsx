import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { noAuthPost } from "../../config/axiosClient";

const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await noAuthPost("user/signup", formData).then((data) => {
        const token = data.data.accessToekn;
        localStorage.setItem("starwarsToken", JSON.stringify(token));
        console.log(data.data);
        router.replace("/people");
      });
    } catch (error: any) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-accentDark to-accentLight rounded-xl shadow-lg">
      <h1 className="text-heading-2/h1 text-grey-0 text-center mb-10">
        SignUp
      </h1>
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSignUp}
      >
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="px-2 py-1 border-none rounded-lg"
          placeholder="Enter email"
          required
          disabled={loading}
        />
        <input
          name="password"
          type="text"
          value={formData.password}
          onChange={handleInputChange}
          className="px-2 py-1 border-none rounded-lg "
          placeholder="Enter new password"
          required
          disabled={loading}
          minLength={4}
        />
        <button className="text-grey-9 p-2 w-[100px] border bg-neon text-body-2/b2 rounded-lg">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
