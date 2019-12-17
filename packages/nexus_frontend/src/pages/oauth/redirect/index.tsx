import { FunctionComponent, useEffect, useMemo } from "react";
import useAuthContext from "../../../services/auth";
import { GetUserDocument, GetUserQuery } from "./GetUser.generated";
import { useCreateUserMutation } from "./CreateUser.generated";
import { useApolloClient } from "@apollo/client";
import { useCurrentRoute, useNavigation } from "react-navi";
import getHashParams from "../../../util/getHashParams";
import Cookies from "js-cookie";
import addSeconds from "date-fns/addSeconds";
import discordLookup from "../../../services/auth/discordLookup";

const OauthRedirectPage: FunctionComponent = () => {
  const {
    url: { hash }
  } = useCurrentRoute();
  const navigation = useNavigation();
  const { setUser } = useAuthContext();
  const apolloClient = useApolloClient();
  const [createUser] = useCreateUserMutation();
  const hashParams = useMemo(() => {
    const hashParams = getHashParams(hash);
    Cookies.set("discord_token", hashParams, {
      expires: addSeconds(new Date(), Number(hashParams.expires_in))
    });
    return hashParams;
  }, []);
  useEffect(() => {
    async function redirectAuth() {
      const user = await discordLookup(
        hashParams.token_type,
        hashParams.access_token
      );
      if (user) {
        const { data } = await apolloClient.query<GetUserQuery>({
          query: GetUserDocument,
          variables: { id: user.id }
        });

        if (data.user) {
          console.log("User already exists");
          console.warn("TODO: add update user here");
          setUser(user);
          navigation.navigate(
            hashParams.state ? JSON.parse(atob(hashParams.state)) : "/"
          );
        } else {
          try {
            const { errors } = await createUser({
              variables: user
            });
            if (errors) {
              throw errors;
            } else {
              setUser(user);
              navigation.navigate(
                hashParams.state ? JSON.parse(atob(hashParams.state)) : "/"
              );
            }
          } catch (ex) {
            console.error(ex);
          }
        }
      } else {
        Cookies.remove("discord_token");
        navigation.navigate("/");
        return false;
      }
    }
    redirectAuth();
  }, [apolloClient, createUser, hashParams, navigation, setUser]);

  return null;
};

export default OauthRedirectPage;
