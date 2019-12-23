import * as Types from "../../../../graphql/types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type CreateUserMutationVariables = {
  id: Types.Scalars["Int"];
  username: Types.Scalars["String"];
  discriminator: Types.Scalars["Int"];
  avatar?: Types.Maybe<Types.Scalars["String"]>;
};

export type CreateUserMutation = { __typename?: "mutation_root" } & {
  insert_users: Types.Maybe<
    { __typename?: "users_mutation_response" } & {
      returning: Array<{ __typename?: "users" } & Pick<Types.Users, "id">>;
    }
  >;
};

export const CreateUserDocument = gql`
  mutation CreateUser(
    $id: Int!
    $username: String!
    $discriminator: Int!
    $avatar: String
  ) {
    insert_users(
      objects: {
        id: $id
        username: $username
        discriminator: $discriminator
        avatar: $avatar
      }
      on_conflict: {
        constraint: users_pkey
        update_columns: [avatar, discriminator, username]
      }
    ) {
      returning {
        id
      }
    }
  }
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      discriminator: // value for 'discriminator'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CreateUserDocument, baseOptions);
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<
  CreateUserMutation
>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
