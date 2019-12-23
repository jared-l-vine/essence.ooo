import * as Types from "../graphql/types.generated";

export type NewListingsSubscriptionVariables = {};

export type NewListingsSubscription = { __typename?: "subscription_root" } & {
  listings: Array<
    { __typename?: "listings" } & Pick<
      Types.Listings,
      | "created_at"
      | "description"
      | "edition"
      | "id"
      | "last_posted"
      | "medium"
      | "players"
      | "schedule"
      | "title"
      | "updated_at"
    > & {
        owner: Types.Maybe<
          { __typename?: "users" } & Pick<
            Types.Users,
            | "avatar"
            | "created_at"
            | "discriminator"
            | "id"
            | "updated_at"
            | "username"
          >
        >;
      }
  >;
};

import gql from "graphql-tag";

export const NewListings = gql`
  subscription NewListings {
    listings {
      created_at
      description
      edition
      id
      last_posted
      medium
      owner {
        avatar
        created_at
        discriminator
        id
        updated_at
        username
      }
      players
      schedule
      title
      updated_at
    }
  }
`;
