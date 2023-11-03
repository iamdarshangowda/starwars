import React from "react";
import { AuthGaurdWrapper } from "../../context/routeGaurd";

const PeopleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthGaurdWrapper>{children}</AuthGaurdWrapper>
    </>
  );
};

export default PeopleLayout;
