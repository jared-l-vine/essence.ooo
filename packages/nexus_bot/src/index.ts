import * as Discord from "discord.js";
import gql from "graphql-tag";
import {
  NewListingsSubscription,
  NewListingsSubscriptionSubscriptionVariables,
  NewListingsSubscriptionSubscription
} from "./NewListingsSubscription.generated";
import AWSAppSyncClient from "aws-appsync";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import ApolloClient, { ApolloQueryResult } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import Observable from "zen-observable";
import fetch from "node-fetch";
import { AuthOptions } from "aws-appsync-auth-link";
import ws from "ws";
[
  "DISCORD_TOKEN",
  "REACT_APP_APPSYNC_GRAPHQL_ENDPOINT",
  "REACT_APP_APPSYNC_API_KEY"
].forEach(variableName => {
  if (!process.env[variableName])
    throw new Error(`Could not find environment variable '${variableName}`);
});

const discordClient = new Discord.Client();

//////////////////////////////////////////////////
// const globalAny: any = global;
// globalAny.WebSocket = require("ws");
// globalAny.window = globalAny.window || {
//   setTimeout: setTimeout,
//   clearTimeout: clearTimeout,
//   WebSocket: globalAny.WebSocket,
//   ArrayBuffer: global.ArrayBuffer,
//   addEventListener: function() {},
//   navigator: { onLine: true }
// };
// globalAny.localStorage = {
//   store: {},
//   getItem: function(key: any) {
//     return this.store[key];
//   },
//   setItem: function(key: any, value: any) {
//     this.store[key] = value;
//   },
//   removeItem: function(key: any) {
//     delete this.store[key];
//   }
// };
// require("es6-promise").polyfill();
// require("isomorphic-fetch");

// // If you want to use API key-based auth
// const apiKey = process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT as string;

// // Set up Apollo client
// const gqlClient = new AWSAppSyncClient({
//   url: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT?.replace(
//     "https",
//     "wss"
//   ).replace("appsync-api", "appsync-realtime-api") as string,
//   region: process.env.AWS_REGION || "us-east-1",
//   auth: {
//     type: "API_KEY",
//     apiKey
//   }
//   //   disableOffline: true //Uncomment for AWS Lambda
// });

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
    // @ts-ignore
    (_v, key) => key === "261581340862840843" || process.env.CHANNEL_ID
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

        // TODO: Update listing
      },
      error: console.error,
      complete: console.log
    });
  } catch (ex) {
    console.error(ex);
  }
});

discordClient.login(process.env.DISCORD_TOKEN);
