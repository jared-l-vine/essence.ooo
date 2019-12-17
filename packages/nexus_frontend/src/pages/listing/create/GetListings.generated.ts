import * as Types from "../../../../graphql/types.generated";

import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";

export type GetListingsQueryVariables = {
  owner_id?: Types.Maybe<Types.Scalars["ID"]>;
};

export type GetListingsQuery = { __typename?: "Query" } & {
  allListings: Types.Maybe<
    { __typename?: "ListingConnection" } & {
      listings: Types.Maybe<
        Array<
          Types.Maybe<
            { __typename?: "Listing" } & Pick<Types.Listing, "id" | "title">
          >
        >
      >;
    }
  >;
};

export const GetListingsDocument = gql`
  query GetListings($owner_id: ID) {
    allListings(owner_id: $owner_id) {
      listings {
        id
        title
      }
    }
  }
`;

/**
 * __useGetListingsQuery__
 *
 * To run a query within a React component, call `useGetListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListingsQuery({
 *   variables: {
 *      owner_id: // value for 'owner_id'
 *   },
 * });
 */
export function useGetListingsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetListingsQuery,
    GetListingsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetListingsQuery, GetListingsQueryVariables>(
    GetListingsDocument,
    baseOptions
  );
}
export function useGetListingsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetListingsQuery,
    GetListingsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetListingsQuery,
    GetListingsQueryVariables
  >(GetListingsDocument, baseOptions);
}
export type GetListingsQueryHookResult = ReturnType<typeof useGetListingsQuery>;
export type GetListingsLazyQueryHookResult = ReturnType<
  typeof useGetListingsLazyQuery
>;
export type GetListingsQueryResult = ApolloReactCommon.QueryResult<
  GetListingsQuery,
  GetListingsQueryVariables
>;
