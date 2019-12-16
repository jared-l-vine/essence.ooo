import * as Types from "../../../../graphql/types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type CreateListingMutationVariables = {
  createlistinginput: Types.CreateListingInput;
};

export type CreateListingMutation = { __typename?: "Mutation" } & {
  createListing: Types.Maybe<
    { __typename?: "Listing" } & Pick<
      Types.Listing,
      "id" | "title" | "description" | "created_at" | "updated_at"
    >
  >;
};

export const CreateListingDocument = gql`
  mutation createListing($createlistinginput: CreateListingInput!) {
    createListing(input: $createlistinginput) {
      id
      title
      description
      created_at
      updated_at
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
 *      createlistinginput: // value for 'createlistinginput'
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
