import * as Types from "../graphql/types.generated";

export type NewListingsSubscriptionSubscriptionVariables = {};

export type NewListingsSubscriptionSubscription = {
  __typename?: "Subscription";
} & {
  newListings: Types.Maybe<
    { __typename?: "Listing" } & Pick<
      Types.Listing,
      | "id"
      | "title"
      | "description"
      | "edition"
      | "medium"
      | "players"
      | "schedule"
    > & {
        owner: { __typename?: "User" } & Pick<
          Types.User,
          "id" | "username" | "discriminator" | "avatar"
        >;
      }
  >;
};

import gql from "graphql-tag";

export const NewListingsSubscription = gql`
  subscription NewListingsSubscription {
    newListings {
      id
      title
      description
      owner {
        id
        username
        discriminator
        avatar
      }
      edition
      medium
      players
      schedule
    }
  }
`;
