import { Outlet, useNavigate } from "react-router-dom";
import { setCurrentMarketplaceId } from "../../features/marketplace/marketplaces/currentMarketplaceId";
import { getCurrentMarketplace } from "../../features/marketplace/marketplaces/getCurrentMarketplace";
import Menu from "./Menu";

export default function MarketplacePage(): JSX.Element {
  const navigate = useNavigate();
  const currentMarketplace = getCurrentMarketplace();

  function handleSelectMarketplaceClick() {
    setCurrentMarketplaceId(undefined);
    navigate("/");
  }

  if (!currentMarketplace) {
    return (
      <div>
        <h3>Marketplace not selected</h3>
        <button onClick={handleSelectMarketplaceClick}>
          Go to the Marketplace Selection page
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to {currentMarketplace.name}</h1>
      <Menu />
      <hr />
      <Outlet />
    </div>
  );
}
