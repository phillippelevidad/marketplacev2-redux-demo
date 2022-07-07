import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

export interface PrivateRouteProps {
  path?: string;
  component: React.ComponentType;
}

export default function PrivateRoute({
  component: ComponentToRender,
}: PrivateRouteProps): JSX.Element {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <span>Loading...</span>;
  if (isAuthenticated) return <ComponentToRender />;
  return <Navigate to="/marketplace/login" />;
}
