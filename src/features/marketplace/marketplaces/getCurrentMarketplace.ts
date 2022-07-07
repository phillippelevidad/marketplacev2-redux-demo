import { getCurrentMarketplaceId } from "./currentMarketplaceId";
import { Marketplace } from "./Marketplace";
import { listMarketplaces } from "./listMarketplaces";

export function getCurrentMarketplace(): Marketplace | undefined {
  const id = getCurrentMarketplaceId();
  return listMarketplaces().find((entry) => entry.id === id);
}
