import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `AWSTimestamp` scalar type provided by AWS AppSync, represents the number of
   * seconds that have elapsed since `1970-01-01T00:00Z`. Negative values are also
   * accepted and these represent the number of seconds till `1970-01-01T00:00Z`.
   * Timestamps are serialized and deserialized as integers. The minimum supported
   * timestamp value is **`-31557014167219200`** which corresponds to
   * `-1000000000-01-01T00:00Z`. The maximum supported timestamp value is
   * **`31556889864403199`** which corresponds to
   * `1000000000-12-31T23:59:59.999999999Z`.
   */
  AWSTimestamp: any;
};

export type Listing = {
  __typename?: "Listing";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  created_at: Scalars["AWSTimestamp"];
  last_posted?: Maybe<Scalars["AWSTimestamp"]>;
  owner: User;
};

export type Mutation = {
  __typename?: "Mutation";
  createListing?: Maybe<Listing>;
  createUser?: Maybe<User>;
};

export type MutationCreateListingArgs = {
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  owner_id: Scalars["ID"];
};

export type MutationCreateUserArgs = {
  id: Scalars["String"];
  username: Scalars["String"];
  discriminator: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  listing?: Maybe<Listing>;
  allListings?: Maybe<Array<Maybe<Listing>>>;
  user?: Maybe<User>;
};

export type QueryListingArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  newListings?: Maybe<Listing>;
};

export type User = {
  __typename?: "User";
  id: Scalars["String"];
  username: Scalars["String"];
  discriminator: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Listing: ResolverTypeWrapper<Listing>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  AWSTimestamp: ResolverTypeWrapper<Scalars["AWSTimestamp"]>;
  User: ResolverTypeWrapper<User>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  Listing: Listing;
  String: Scalars["String"];
  AWSTimestamp: Scalars["AWSTimestamp"];
  User: User;
  Mutation: {};
  Subscription: {};
  Boolean: Scalars["Boolean"];
};

export type DeferDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_Api_KeyDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_AuthDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { cognito_groups?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_OidcDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_Cognito_User_PoolsDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { cognito_groups?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_IamDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_PublishDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { subscriptions?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_SubscribeDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = { mutations?: Maybe<Maybe<Array<Maybe<Scalars["String"]>>>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface AwsTimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["AWSTimestamp"], any> {
  name: "AWSTimestamp";
}

export type ListingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Listing"] = ResolversParentTypes["Listing"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  created_at?: Resolver<
    ResolversTypes["AWSTimestamp"],
    ParentType,
    ContextType
  >;
  last_posted?: Resolver<
    Maybe<ResolversTypes["AWSTimestamp"]>,
    ParentType,
    ContextType
  >;
  owner?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createListing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateListingArgs, "title" | "owner_id">
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, "id" | "username" | "discriminator">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  listing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<QueryListingArgs, "id">
  >;
  allListings?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Listing"]>>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  newListings?: SubscriptionResolver<
    Maybe<ResolversTypes["Listing"]>,
    "newListings",
    ParentType,
    ContextType
  >;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  discriminator?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AWSTimestamp?: GraphQLScalarType;
  Listing?: ListingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  defer?: DeferDirectiveResolver<any, any, ContextType>;
  aws_api_key?: Aws_Api_KeyDirectiveResolver<any, any, ContextType>;
  aws_auth?: Aws_AuthDirectiveResolver<any, any, ContextType>;
  aws_oidc?: Aws_OidcDirectiveResolver<any, any, ContextType>;
  aws_cognito_user_pools?: Aws_Cognito_User_PoolsDirectiveResolver<
    any,
    any,
    ContextType
  >;
  aws_iam?: Aws_IamDirectiveResolver<any, any, ContextType>;
  aws_publish?: Aws_PublishDirectiveResolver<any, any, ContextType>;
  aws_subscribe?: Aws_SubscribeDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
