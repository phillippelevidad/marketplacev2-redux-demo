import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { auth0Wrapper } from "./features/auth/auth0Wrapper";
import MarketplaceHomePage from "./pages/marketplace/home/MarketplaceHomePage";
import MarketplaceBuyerGroupsPage from "./pages/marketplace/buyer-groups/MarketplaceBuyerGroupsPage";
import MarketplaceLoginPage from "./pages/marketplace/login/MarketplaceLoginPage";
import MarketplacePage from "./pages/marketplace/MarketplacePage";
import SelectMarketplacePage from "./pages/select-marketplace/SelectMarketplacePage";

function App() {
  // Solution for using @auth0/auth0-react with RTK Query.
  // https://github.com/reduxjs/redux-toolkit/issues/1331#issuecomment-1080901326
  const { getAccessTokenSilently } = useAuth0();
  auth0Wrapper.configure(getAccessTokenSilently);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectMarketplacePage />} />
        <Route path="/marketplace" element={<MarketplacePage />}>
          <Route path="login" element={<MarketplaceLoginPage />} />
          <Route
            path="home"
            element={<PrivateRoute component={MarketplaceHomePage} />}
          />
          <Route
            path="buyer-groups"
            element={<PrivateRoute component={MarketplaceBuyerGroupsPage} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
