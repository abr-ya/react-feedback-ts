import { gapi } from "gapi-script";

export const gapiInit = () => {
  function start() {
    gapi.client.init({
      clientId: process.env.GOOGLE_CLIENT_ID,
      scope: "email",
    });
  }
  gapi.load("client:auth2", start);
};
