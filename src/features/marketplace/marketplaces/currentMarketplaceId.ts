const KEY = "currentMarketplaceId";

export function getCurrentMarketplaceId(): string | undefined {
  return window.localStorage.getItem(KEY) ?? undefined;
}

export function setCurrentMarketplaceId(id: string | null | undefined): void {
  if (id) {
    window.localStorage.setItem(KEY, id);
    return;
  }
  window.localStorage.removeItem(KEY);
}
