import Cookies from "js-cookie";
import { User } from "../../../graphql/types.generated";

export default async function discordLookup(
  token_type: string,
  access_token: string
): Promise<User | null> {
  if (!token_type || !access_token) throw new Error("Invalid OAuth Redirect");

  const user: User = await fetch("https://discordapp.com/api/v6/users/@me", {
    headers: { authorization: `${token_type} ${access_token}` }
  })
    .then(r => r.json())
    .catch(ex => {
      Cookies.remove("discord_token");
      console.error(ex);
      return ex;
    });
  return user || null;
}
