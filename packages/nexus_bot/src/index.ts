import * as Discord from "discord.js";
import gql from "graphql-tag";
import {
  NewListingsSubscription,
  NewListingsSubscriptionSubscriptionVariables,
  NewListingsSubscriptionSubscription
} from "./NewListingsSubscription.generated";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import { ApolloLink } from "apollo-link";
import ApolloClient, { ApolloQueryResult } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";
import { AuthOptions } from "aws-appsync-auth-link";
import ws from "ws";
import * as Sentry from "@sentry/node";
import * as Integrations from "@sentry/integrations";

// TODO: whole bunch of cleanup. Uninstall unused node modules
// Look at upgrading to Apollo 3

[
  "DISCORD_TOKEN",
  "REACT_APP_APPSYNC_GRAPHQL_ENDPOINT",
  "REACT_APP_APPSYNC_API_KEY"
].forEach(variableName => {
  if (!process.env[variableName])
    throw new Error(`Could not find environment variable '${variableName}`);
});

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

(global as any).fetch = fetch;
(global as any).WebSocket = ws;

const url = process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT?.replace(
  "https",
  "wss"
).replace("appsync-api", "appsync-realtime-api") as string;
const region = process.env.AWS_REGION || "us-east-1";
const apiKey = process.env.REACT_APP_APPSYNC_API_KEY as string;

const auth = {
  type: "API_KEY",
  apiKey
} as AuthOptions;

const link = ApolloLink.from([
  createAuthLink({
    url: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT as string,
    region,
    auth
  }),
  createSubscriptionHandshakeLink({
    url: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT as string,
    region,
    auth
  })
]);

const gqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

///////////////////////////////////////////////////

discordClient.on("ready", () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);

  const findAGameChannel = discordClient.channels.find(
    (_v, key) => key === (process.env.CHANNEL_ID || "656727606875389974")
  ) as Discord.TextChannel;

  console.log(`found channel '${findAGameChannel.name}'`);

  try {
    console.log("starting sub");
    const observable = gqlClient.subscribe<
      ApolloQueryResult<NewListingsSubscriptionSubscription>,
      NewListingsSubscriptionSubscriptionVariables
    >({
      query: NewListingsSubscription
    });

    console.log("sub subscribed");
    observable.subscribe({
      start: () => console.log("starting"),
      next: async ({ data: d }) => {
        console.log("received a new listing, posting message");
        try {
          const message = await findAGameChannel.send({
            embed: {
              color: 0xffff00,
              title: `**${d.newListings?.title}**`,
              // url: "https://discord.js.org",
              author: {
                name: `@${d.newListings?.owner.username}#${d.newListings?.owner.discriminator}`,
                icon_url: `https://cdn.discordapp.com/avatars/${d.newListings?.owner.id}/${d.newListings?.owner.avatar}.png?size=32`
                // url: "https://discord.js.org"
              },
              description: d.newListings?.description || undefined,
              // thumbnail: {
              //   url: "https://i.imgur.com/wSTFkRM.png"
              // },
              // fields: [],
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
          console.log("done posting");
          // TODO: Update listing
        } catch (ex) {
          console.error(ex);
        }
      },
      error: console.error,
      complete: console.log
    });
  } catch (ex) {
    console.error(ex);
  }
});

discordClient.login(process.env.DISCORD_TOKEN);
