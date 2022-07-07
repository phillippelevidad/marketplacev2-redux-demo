import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { setCurrentMarketplaceId } from "../../features/marketplace/marketplaces/currentMarketplaceId";
import { useAuthenticateUserMutation } from "../../features/membership/users/@usersSlice";

export default function Menu(): JSX.Element {
  const [authenticateUser] = useAuthenticateUserMutation();
  const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  function handleAuthenticateClick() {
    authenticateUser({ role: "admin" });
  }

  function handleLoginClick() {
    loginWithRedirect({ scope: "openid profile email" });
  }

  function handleLogoutClick() {
    setCurrentMarketplaceId(undefined);
    logout({ returnTo: window.location.origin });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <>
          <button onClick={handleLogoutClick}>Logout</button>
          <button onClick={handleAuthenticateClick}>Authenticate</button>
          <button onClick={() => navigate("/marketplace/buyer-groups")}>
            Buyer Groups
          </button>
        </>
      ) : (
        <>
          <button onClick={handleLoginClick}>Login</button>
        </>
      )}
    </div>
  );
}
