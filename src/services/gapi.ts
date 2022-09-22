import { gapi } from "gapi-script";

export const gapiInit = () => {
  console.log("gapi init");
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const scope = "email";
  console.log("init:", clientId.slice(0, 20), scope);
  function start() {
    console.log("start:", clientId.slice(0, 20), scope);
    gapi.auth2.init({ clientId, scope });
  }
  gapi.load("client:auth2", start);
};
