import { User } from "../../types/User";
import Cookies from "js-cookie";

export default async function discordLookup(
  token_type: string,
  access_token: string
): Promise<User | null> {
  if (!token_type || !access_token) throw new Error("Invalid OAuth Redirect");

  const user = await fetch("https://discordapp.com/api/v6/users/@me", {
    headers: { authorization: `${token_type} ${access_token}` },
  })
    .then((r) => r.json())
    .then((user) => {
      const token = Cookies.getJSON("discord_token");
      Cookies.set(
        "discord_token",
        { ...token, id: user.id },
        { expires: new Date(token.expiry) }
      );
      return user;
    })
    .catch((ex) => {
      Cookies.remove("discord_token");
      console.error(ex);
      return ex;
    });
  return user || null;
}
