import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getCurrentMarketplaceId,
  setCurrentMarketplaceId,
} from "../../features/marketplace/marketplaces/currentMarketplaceId";
import { listMarketplaces } from "../../features/marketplace/marketplaces/listMarketplaces";

export default function SelectMarketplacePage(): JSX.Element {
  const navigate = useNavigate();
  const marketplaces = listMarketplaces();
  const [selectedId, setSelectedId] = useState(getCurrentMarketplaceId() ?? "");

  useEffect(() => {
    setCurrentMarketplaceId(selectedId);
    if (selectedId.length) navigate("/marketplace/home");
  }, [selectedId, navigate]);

  function handleSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    setSelectedId(event.target.value);
  }

  return (
    <>
      <div>
        <h1>Select Marketplace</h1>
        <p>Select a marketplace to begin:</p>
      </div>
      <div>
        <form>
          <select value={selectedId} onChange={handleSelectChange}>
            <option value="">Select a marketplace</option>
            {marketplaces.map((marketplace) => (
              <option key={marketplace.id} value={marketplace.id}>
                {marketplace.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
