import { auth0Wrapper } from "../auth/auth0Wrapper";
import { getCurrentMarketplaceId } from "../marketplace/marketplaces/currentMarketplaceId";

export async function prepareHeaders(headers: Headers): Promise<Headers> {
  const token = await auth0Wrapper.getAccessTokenSilently();
  const currentMarketplaceId = getCurrentMarketplaceId();

  if (!token || !currentMarketplaceId)
    throw new Error("Missing token or currentMarketplaceId.");

  headers.set("Content-Type", "application/json");
  headers.set("Authorization", "Bearer " + token);
  headers.set("x-marketplace", currentMarketplaceId);
  return headers;
}
