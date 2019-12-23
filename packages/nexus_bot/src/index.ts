import nodeFetch from "node-fetch";
import * as Discord from "discord.js";
import * as Sentry from "@sentry/node";
import * as Integrations from "@sentry/integrations";
import { Listing } from "../graphql/types.generated";
import Maybe from "graphql/tsutils/Maybe";

const globalAny: any = global;
globalAny.fetch = nodeFetch;

Sentry.init({
  dsn: "https://9656fc1c24a84d66a89f079981d684b7@sentry.io/1860567",
  environment: process.env.NODE_ENV,
  integrations: [
    new Integrations.CaptureConsole({
      levels: ["error"]
    })
  ]
});

const discordClient = new Discord.Client();

discordClient.login(process.env.DISCORD_TOKEN);

const sleep = async (timeout: number) =>
  new Promise(res => setTimeout(res, timeout));

export default async (event: { body: string }) => {
  console.log("starting");
  console.log("=========");
  console.log(event);
  console.log("=========");

  const body = JSON.parse(event.body);

  const {
    event: {
      data: { old, new: listing },
      session_variables
    }
  } = body as {
    event: {
      session_variables: {
        ["x-hasura-role"]: string;
        ["x-hasura-user-id"]: string;
        ["x-hasura-discord-token"]: string;
      };
      data: {
        old: Maybe<Listing>;
        new: Listing;
      };
    };
  };
  // get user details
  const user = await fetch("https://discordapp.com/api/v6/users/@me", {
    headers: {
      authorization: body.event.session_variables["x-hasura-discord-token"]
    }
  }).then(r => r.json());

  console.log(user);

  let finished = false;

  discordClient.on("ready", async () => {
    console.log(`Logged in as ${discordClient.user.tag}!`);

    const findAGameChannel = discordClient.channels.find(
      (_v, key) => key === (process.env.CHANNEL_ID || "656727606875389974")
    ) as Discord.TextChannel;

    console.log(`found channel '${findAGameChannel.name}'`);

    try {
      // post
      const message = await findAGameChannel.send({
        embed: {
          color: 0xffff00,
          title: `**${listing?.title}**`,
          // url: "https://discord.js.org",
          author: {
            name: `@${user?.username}#${user?.discriminator}`,
            icon_url: `https://cdn.discordapp.com/avatars/${user?.id}/${user?.avatar}.png?size=32`
            // url: "https://discord.js.org"
          },
          description: listing?.description || undefined,
          // thumbnail: {
          //   url: "https://i.imgur.com/wSTFkRM.png"
          // },
          fields: [
            listing?.edition && {
              name: "Edition",
              value: listing.edition,
              inline: true
            },
            listing?.medium && {
              name: "Medium",
              value: listing.medium,
              inline: true
            },
            listing?.players && {
              name: "Players",
              value: listing.players,
              inline: true
            },
            listing?.schedule && {
              name: "Schedule",
              value: listing.schedule
            }
          ].filter(Boolean),
          // image: {
          //   url: "https://i.imgur.com/wSTFkRM.png"
          // },
          timestamp: new Date(),
          footer: {
            text: "ne❌us"
            // icon_url: "https://i.imgur.com/wSTFkRM.png"
          }
        }
      });
      // update listing
    } catch (ex) {
      console.error(ex);
    } finally {
      console.log("finished");
      finished = true;
    }
  });

  while (!finished) {
    await sleep(100);
  }
  console.log("shutting down");
};
