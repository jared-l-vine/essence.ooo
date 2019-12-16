import { FunctionComponent, useEffect } from "react";
import useAuthContext from "../../../services/auth";
import { User } from "../../../../graphql/types.generated";
import {
  GetUserDocument,
  GetUserQueryHookResult,
  GetUserQuery
} from "./GetUser.generated";
import { useCreateUserMutation } from "./CreateUser.generated";
import { useApolloClient } from "@apollo/client";

const OauthRedirectPage: FunctionComponent = () => {
  const { user, setUser } = useAuthContext();
  const apolloClient = useApolloClient();
  const [createUser] = useCreateUserMutation();
  // TODO: save cookie w token details
  useEffect(() => {
    async function discordLookup() {
      const token_type = "Bearer";
      const access_token = "FkeigJyyu2NIQiWUaquIMJKplIOjPD";

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
        } else {
          try {
            const { data: newUser, errors } = await createUser({
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
  }, []);

  return null;
};

export default OauthRedirectPage;
