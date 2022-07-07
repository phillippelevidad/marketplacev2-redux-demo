import { GetTokenSilentlyOptions } from "@auth0/auth0-react";

export type GetAccessTokenSilentlyFunction = (
  options?: GetTokenSilentlyOptions | undefined
) => Promise<string | undefined>;

let getAccessTokenSilentlyCopy: GetAccessTokenSilentlyFunction;

export const auth0Wrapper = {
  configure: function (getAccessTokenSilently: GetAccessTokenSilentlyFunction) {
    getAccessTokenSilentlyCopy = getAccessTokenSilently;
  },
  getAccessTokenSilently: function (): Promise<string | undefined> {
    return getAccessTokenSilentlyCopy();
  },
};
