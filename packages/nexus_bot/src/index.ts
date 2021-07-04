import nodeFetch from "node-fetch";
import * as Sentry from "@sentry/node";
import * as Integrations from "@sentry/integrations";
import { Listing } from "../graphql/types.generated";
import Maybe from "graphql/tsutils/Maybe";

const globalAny: any = global;
globalAny.fetch = nodeFetch;

const lfgRoleId = "219509431967154176";

Sentry.init({
  dsn: "https://9656fc1c24a84d66a89f079981d684b7@sentry.io/1860567",
  environment: process.env.NODE_ENV,
  integrations: [
    new Integrations.CaptureConsole({
      levels: ["error"],
    }),
  ],
});

export default async (event: { body: string }) => {
  console.info("starting");

  const body = JSON.parse(event.body);
  console.log(event);
  console.log(body);
  const { discordToken, listing } = body as {
    discordToken: {
      token_type: string;
      access_token: string;
      expires_in: string;
      scope: string;
      state: string;
      expiry: string;
      id: string;
    };
    listing: Record<
      | "splat"
      | "description"
      | "edition"
      | "medium"
      | "players"
      | "title"
      | "schedule",
      string
    >;
  };
  // get user details
  const user = await fetch("https://discordapp.com/api/v6/users/@me", {
    headers: {
      authorization: `${discordToken.token_type} ${discordToken.access_token}`,
    },
  }).then((r) => r.json());

  console.log(user);

  try {
    // post
    console.log("posting message");
    const response = await fetch(
      "https://discordapp.com/api/webhooks/658822752312229928/H-MYX4FfZCF2GEo1If4czWOpU8R9wYac9neWj9cZo6nPtwXyqh7jDP7iywrezVcgUeK6?wait=true",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `Hey <@&${lfgRoleId}>! <@${user.id}> is hosting a game.`,
          // username: user.username,
          // avatar_url: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=128`,
          embeds: [
            {
              color: 0xffff00,
              title: `**${listing?.title}**`,
              // url: "https://discord.js.org",
              // author: {
              //   name: `@${user?.username}#${user?.discriminator}`,
              //   icon_url: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=32`
              //   // url: "https://discord.js.org"
              // },
              description: listing?.description || undefined,
              // thumbnail: {
              //   url: "https://i.imgur.com/wSTFkRM.png"
              // },
              fields: [
                // { name: "Storyteller", value: `<@${user.id}>` },
                listing?.splat && {
                  name: "Splat",
                  value: listing.splat,
                  inline: true,
                },
                listing?.edition && {
                  name: "Edition",
                  value: listing.edition,
                  inline: true,
                },
                listing?.medium && {
                  name: "Medium",
                  value: listing.medium,
                  inline: true,
                },
                listing?.players && {
                  name: "Players",
                  value: listing.players,
                  inline: true,
                },
                listing?.schedule && {
                  name: "Schedule",
                  value: listing.schedule,
                },
              ].filter(Boolean),
              // image: {
              //   url: "https://i.imgur.com/wSTFkRM.png"
              // },
              timestamp: new Date(),
              footer: {
                text: "ne❌us",
                // icon_url: "https://i.imgur.com/wSTFkRM.png"
              },
            },
          ],
        }),
      }
    );
    console.log("Done Posting");
    const body = await response.json();
    console.log(response);
    console.log(body);
    return {
      statusCode: response.status,
    };
  } catch (ex) {
    console.error(ex);
    return {
      statusCode: "500",
    };
  }
};
