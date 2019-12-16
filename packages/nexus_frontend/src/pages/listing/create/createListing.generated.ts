import * as Types from "../../../../graphql/types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type CreateListingMutationVariables = {
  title: Types.Scalars["String"];
  description?: Types.Maybe<Types.Scalars["String"]>;
  owner_id: Types.Scalars["ID"];
};

export type CreateListingMutation = { __typename?: "Mutation" } & {
  createListing: Types.Maybe<
    { __typename?: "Listing" } & Pick<Types.Listing, "id" | "title">
  >;
};

export const CreateListingDocument = gql`
  mutation CreateListing(
    $title: String!
    $description: String
    $owner_id: ID!
  ) {
    createListing(
      title: $title
      description: $description
      owner_id: $owner_id
    ) {
      id
      title
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
