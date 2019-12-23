import * as Types from "../../../../graphql/types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type CreateListingMutationVariables = {
  title: Types.Scalars["String"];
  description?: Types.Maybe<Types.Scalars["String"]>;
  owner_id: Types.Scalars["Int"];
  edition?: Types.Maybe<Types.Scalars["String"]>;
  medium?: Types.Maybe<Types.Scalars["String"]>;
  players?: Types.Maybe<Types.Scalars["Int"]>;
  schedule?: Types.Maybe<Types.Scalars["String"]>;
};

export type CreateListingMutation = { __typename?: "mutation_root" } & {
  insert_listings: Types.Maybe<
    { __typename?: "listings_mutation_response" } & {
      returning: Array<
        { __typename?: "listings" } & Pick<Types.Listings, "id">
      >;
    }
  >;
};

export const CreateListingDocument = gql`
  mutation CreateListing(
    $title: String!
    $description: String
    $owner_id: Int!
    $edition: String
    $medium: String
    $players: Int
    $schedule: String
  ) {
    insert_listings(
      objects: {
        title: $title
        description: $description
        edition: $edition
        medium: $medium
        owner_id: $owner_id
        players: $players
        schedule: $schedule
      }
    ) {
      returning {
        id
      }
    }
  }
`;
export type CreateListingMutationFn = ApolloReactCommon.MutationFunction<
  CreateListingMutation,
  CreateListingMutationVariables
>;

/**
 * __useCreateListingMutation__
 *
 * To run a mutation, you first call `useCreateListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListingMutation, { data, loading, error }] = useCreateListingMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      owner_id: // value for 'owner_id'
 *      edition: // value for 'edition'
 *      medium: // value for 'medium'
 *      players: // value for 'players'
 *      schedule: // value for 'schedule'
 *   },
 * });
 */
export function useCreateListingMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateListingMutation,
    CreateListingMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateListingMutation,
    CreateListingMutationVariables
  >(CreateListingDocument, baseOptions);
}
export type CreateListingMutationHookResult = ReturnType<
  typeof useCreateListingMutation
>;
export type CreateListingMutationResult = ApolloReactCommon.MutationResult<
  CreateListingMutation
>;
export type CreateListingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateListingMutation,
  CreateListingMutationVariables
>;
