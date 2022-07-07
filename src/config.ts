export const config = {
  auth0: {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUrl: `${window.location.origin}/marketplace/login`,
  },
  api: {
    catalogBaseUrl: "https://k57sf45m71.execute-api.us-east-1.amazonaws.com",
    marketplacesBaseUrl:
      "https://742n59ojcg.execute-api.us-east-1.amazonaws.com",
    membershipBaseUrl: "https://1e7ud4xuu0.execute-api.us-east-1.amazonaws.com",
    pricingBaseUrl: "https://e1gxw7xow9.execute-api.us-east-1.amazonaws.com",
  },
};
