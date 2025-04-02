import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface PrivateRouteProps {
  allowedRoles: string[];
  children?: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  return (
    <>
      <Outlet />
      {allowedRoles}
    </>
  );
};

export default PrivateRoute;
