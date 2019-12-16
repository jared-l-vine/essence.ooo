import { FunctionComponent, useEffect } from "react";
import useAuthContext from "../../../services/auth";
import { User } from "../../../../graphql/types.generated";
import { GetUserDocument, GetUserQuery } from "./GetUser.generated";
import { useCreateUserMutation } from "./CreateUser.generated";
import { useApolloClient } from "@apollo/client";
import { useCurrentRoute, useNavigation } from "react-navi";

function getHashParams(hash: string) {
  var hashParams: Record<string, string> = {};
  var e,
    a = /\+/g, // Regex for replacing addition symbol with a space
    r = /([^&;=]+)=?([^&;]*)/g,
    d = function(s: string) {
      return decodeURIComponent(s.replace(a, " "));
    },
    q = hash.substring(1);

  while ((e = r.exec(q))) hashParams[d(e[1])] = d(e[2]);

  return hashParams;
}

const OauthRedirectPage: FunctionComponent = () => {
  console.warn("Mounting OauthRedirectPage");
  const {
    url: { hash }
  } = useCurrentRoute();
  const navigation = useNavigation();
  const { setUser } = useAuthContext();
  const apolloClient = useApolloClient();
  const [createUser] = useCreateUserMutation();
  // TODO: save cookie w token details
  useEffect(() => {
    async function discordLookup() {
      const { token_type, access_token, state } = getHashParams(hash);

      if (!token_type || !access_token)
        throw new Error("Invalid OAuth Redirect");

      const user: User = await fetch(
        "https://discordapp.com/api/v6/users/@me",
        {
          headers: { authorization: `${token_type} ${access_token}` }
        }
      )
        .then(r => r.json())
        .catch(ex => {
          // TODO: clear cookie if there's an error?

          console.error(ex);
          return ex;
        });
      if (user) {
        setUser(user);
        const { data } = await apolloClient.query<GetUserQuery>({
          query: GetUserDocument,
          variables: { id: user.id }
        });

        if (data.user) {
          console.log("User already exists");
          console.warn("TODO: add update user here");
          setUser(user);
          navigation.navigate(state ? JSON.parse(atob(state)) : "/");
        } else {
          try {
            const { errors } = await createUser({
              variables: user
            });
            if (!errors) {
              setUser(user);
              console.warn("TODO: redirect");
            } else {
              throw errors;
            }
          } catch (ex) {
            console.error(ex);
          }
        }
      }
    }
    discordLookup();
  }, [apolloClient, createUser, hash, navigation, setUser]);

  return null;
};

export default OauthRedirectPage;
