import React from "react";
import { AuthGaurdWrapper } from "../../context/routeGaurd";

const PeopleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AuthGaurdWrapper>{children}</AuthGaurdWrapper>
    </div>
  );
};

export default PeopleLayout;
