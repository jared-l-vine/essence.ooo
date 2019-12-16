// import * as Discord from "discord.js";
import { ApolloClient, InMemoryCache, ApolloLink } from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import ws from "ws";
import { NewListingsSubscription } from "./NewListingsSubscription.generated";

const gqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: (new WebSocketLink({
    uri: (process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT || "").replace(
      "https",
      "ws"
    ),
    options: {
      reconnect: true,
      connectionParams: {
        authToken: process.env.REACT_APP_APPSYNC_API_KEY
      }
    },
    webSocketImpl: ws
  }) as unknown) as ApolloLink
});

// ["DISCORD_TOKEN", "REACT_APP_APPSYNC_GRAPHQL_ENDPOINT", "REACT_APP_APPSYNC_API_KEY"].forEach(variableName => {
//   if (!process.env[variableName])
//     throw new Error(`Could not find environment variable '${variableName}`);
// });

// const client = new Discord.Client();

// client.on("ready", () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on("message", msg => {
//   if (msg.content === "ping") {
//     msg.reply("Pong!");
//   }
// });

const query = gqlClient
  .subscribe({ query: NewListingsSubscription })
  .subscribe({
    next(x) {
      console.log(x);
    },
    error(err) {
      console.log(`Finished with error: ${err}`);
    },
    complete() {
      console.log("Finished");
    }
  });

// client.login(process.env.DISCORD_TOKEN);
