"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoadingSpinner from "@components/icons/loadingSpinner";
import verifyToken from "../apis/handleVerifyToken";

interface contextProviderProp {
  children: any;
}

export const AuthGaurdContext = createContext<any>(null);

export const AuthGaurdWrapper: React.FunctionComponent<contextProviderProp> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean>(false);

  const handleVerifyToken = async () => {
    const isTokenValid = await verifyToken();
    if (isTokenValid) {
      setAuthorized(true);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("starwarsToken");

    if (isLoggedIn) {
      handleVerifyToken();
    } else {
      router.push("/");
    }
  }, [pathname]);

  return (
    <>
      {authorized ? (
        <AuthGaurdContext.Provider value={{ authorized, setAuthorized }}>
          {children}
        </AuthGaurdContext.Provider>
      ) : (
        <div className="w-full h-screen flex gap-4 flex-col justify-center items-center">
          <p className="text-body-3/b1 text-grey-0">Verifying User...</p>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export const useAuthGaurdContext = () => {
  return useContext(AuthGaurdContext);
};
