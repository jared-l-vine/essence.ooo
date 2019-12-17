import React, { FunctionComponent, useEffect } from "react";
import useAuthContext from "../../services/auth";
import { useCurrentRoute } from "react-navi";
import discordLookup from "../../services/auth/discordLookup";

const LoginOrganism: FunctionComponent = () => {
  const { url } = useCurrentRoute();
  const { user, cookie, setUser } = useAuthContext();
  useEffect(() => {
    async function cookieAuth() {
      if (cookie) {
        console.log("Found cookie");
        const hydratedCookie = JSON.parse(cookie);
        const user = await discordLookup(
          hydratedCookie.token_type,
          hydratedCookie.access_token
        );
        if (user) {
          setUser(user);
        }
      }
    }
    cookieAuth();
  }, [cookie]);
  return (
    <div>
      <span>Login Status {user ? "Logged In" : "Logged Out"}</span>
      {!user && (
        <a
          href={`https://discordapp.com/api/oauth2/authorize?response_type=token&client_id=656006759533641739&scope=identify%20guilds%20guilds.join&state=${btoa(
            JSON.stringify(url)
          )}`}
        >
          Log In
        </a>
      )}
    </div>
  );
};

export default LoginOrganism;
