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

export type CreateListingInput = {
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  created_at: Scalars["AWSTimestamp"];
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
};

export type DeleteListingInput = {
  id: Scalars["ID"];
};

export type Listing = {
  __typename?: "Listing";
  id: Scalars["ID"];
  title: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  created_at: Scalars["AWSTimestamp"];
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
};

export type ListingConnection = {
  __typename?: "ListingConnection";
  items?: Maybe<Array<Maybe<Listing>>>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createListing?: Maybe<Listing>;
  updateListing?: Maybe<Listing>;
  deleteListing?: Maybe<Listing>;
};

export type MutationCreateListingArgs = {
  input: CreateListingInput;
};

export type MutationUpdateListingArgs = {
  input: UpdateListingInput;
};

export type MutationDeleteListingArgs = {
  input: DeleteListingInput;
};

export type Query = {
  __typename?: "Query";
  getListing?: Maybe<Listing>;
  listListings?: Maybe<ListingConnection>;
};

export type QueryGetListingArgs = {
  id: Scalars["ID"];
};

export type QueryListListingsArgs = {
  filter?: Maybe<TableListingFilterInput>;
  limit?: Maybe<Scalars["Int"]>;
  nextToken?: Maybe<Scalars["String"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  onCreateListing?: Maybe<Listing>;
  onUpdateListing?: Maybe<Listing>;
  onDeleteListing?: Maybe<Listing>;
};

export type SubscriptionOnCreateListingArgs = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["AWSTimestamp"]>;
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
};

export type SubscriptionOnUpdateListingArgs = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["AWSTimestamp"]>;
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
};

export type SubscriptionOnDeleteListingArgs = {
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["AWSTimestamp"]>;
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
};

export type TableBooleanFilterInput = {
  ne?: Maybe<Scalars["Boolean"]>;
  eq?: Maybe<Scalars["Boolean"]>;
};

export type TableFloatFilterInput = {
  ne?: Maybe<Scalars["Float"]>;
  eq?: Maybe<Scalars["Float"]>;
  le?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  ge?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  contains?: Maybe<Scalars["Float"]>;
  notContains?: Maybe<Scalars["Float"]>;
  between?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type TableIdFilterInput = {
  ne?: Maybe<Scalars["ID"]>;
  eq?: Maybe<Scalars["ID"]>;
  le?: Maybe<Scalars["ID"]>;
  lt?: Maybe<Scalars["ID"]>;
  ge?: Maybe<Scalars["ID"]>;
  gt?: Maybe<Scalars["ID"]>;
  contains?: Maybe<Scalars["ID"]>;
  notContains?: Maybe<Scalars["ID"]>;
  between?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  beginsWith?: Maybe<Scalars["ID"]>;
};

export type TableIntFilterInput = {
  ne?: Maybe<Scalars["Int"]>;
  eq?: Maybe<Scalars["Int"]>;
  le?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  ge?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  contains?: Maybe<Scalars["Int"]>;
  notContains?: Maybe<Scalars["Int"]>;
  between?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type TableListingFilterInput = {
  id?: Maybe<TableIdFilterInput>;
  title?: Maybe<TableStringFilterInput>;
  description?: Maybe<TableStringFilterInput>;
  created_at?: Maybe<TableIntFilterInput>;
  updated_at?: Maybe<TableIntFilterInput>;
};

export type TableStringFilterInput = {
  ne?: Maybe<Scalars["String"]>;
  eq?: Maybe<Scalars["String"]>;
  le?: Maybe<Scalars["String"]>;
  lt?: Maybe<Scalars["String"]>;
  ge?: Maybe<Scalars["String"]>;
  gt?: Maybe<Scalars["String"]>;
  contains?: Maybe<Scalars["String"]>;
  notContains?: Maybe<Scalars["String"]>;
  between?: Maybe<Array<Maybe<Scalars["String"]>>>;
  beginsWith?: Maybe<Scalars["String"]>;
};

export type UpdateListingInput = {
  id: Scalars["ID"];
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["AWSTimestamp"]>;
  updated_at?: Maybe<Scalars["AWSTimestamp"]>;
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
  TableListingFilterInput: TableListingFilterInput;
  TableIDFilterInput: TableIdFilterInput;
  TableStringFilterInput: TableStringFilterInput;
  TableIntFilterInput: TableIntFilterInput;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  ListingConnection: ResolverTypeWrapper<ListingConnection>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateListingInput: CreateListingInput;
  UpdateListingInput: UpdateListingInput;
  DeleteListingInput: DeleteListingInput;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  TableBooleanFilterInput: TableBooleanFilterInput;
  TableFloatFilterInput: TableFloatFilterInput;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars["ID"];
  Listing: Listing;
  String: Scalars["String"];
  AWSTimestamp: Scalars["AWSTimestamp"];
  TableListingFilterInput: TableListingFilterInput;
  TableIDFilterInput: TableIdFilterInput;
  TableStringFilterInput: TableStringFilterInput;
  TableIntFilterInput: TableIntFilterInput;
  Int: Scalars["Int"];
  ListingConnection: ListingConnection;
  Mutation: {};
  CreateListingInput: CreateListingInput;
  UpdateListingInput: UpdateListingInput;
  DeleteListingInput: DeleteListingInput;
  Subscription: {};
  Boolean: Scalars["Boolean"];
  TableBooleanFilterInput: TableBooleanFilterInput;
  TableFloatFilterInput: TableFloatFilterInput;
  Float: Scalars["Float"];
};

export type DeferDirectiveResolver<
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

export type Aws_IamDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {}
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Aws_OidcDirectiveResolver<
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

export type Aws_Api_KeyDirectiveResolver<
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
  updated_at?: Resolver<
    Maybe<ResolversTypes["AWSTimestamp"]>,
    ParentType,
    ContextType
  >;
};

export type ListingConnectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ListingConnection"] = ResolversParentTypes["ListingConnection"]
> = {
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Listing"]>>>,
    ParentType,
    ContextType
  >;
  nextToken?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createListing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateListingArgs, "input">
  >;
  updateListing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateListingArgs, "input">
  >;
  deleteListing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteListingArgs, "input">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getListing?: Resolver<
    Maybe<ResolversTypes["Listing"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetListingArgs, "id">
  >;
  listListings?: Resolver<
    Maybe<ResolversTypes["ListingConnection"]>,
    ParentType,
    ContextType,
    QueryListListingsArgs
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  onCreateListing?: SubscriptionResolver<
    Maybe<ResolversTypes["Listing"]>,
    "onCreateListing",
    ParentType,
    ContextType,
    SubscriptionOnCreateListingArgs
  >;
  onUpdateListing?: SubscriptionResolver<
    Maybe<ResolversTypes["Listing"]>,
    "onUpdateListing",
    ParentType,
    ContextType,
    SubscriptionOnUpdateListingArgs
  >;
  onDeleteListing?: SubscriptionResolver<
    Maybe<ResolversTypes["Listing"]>,
    "onDeleteListing",
    ParentType,
    ContextType,
    SubscriptionOnDeleteListingArgs
  >;
};

export type Resolvers<ContextType = any> = {
  AWSTimestamp?: GraphQLScalarType;
  Listing?: ListingResolvers<ContextType>;
  ListingConnection?: ListingConnectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  defer?: DeferDirectiveResolver<any, any, ContextType>;
  aws_auth?: Aws_AuthDirectiveResolver<any, any, ContextType>;
  aws_iam?: Aws_IamDirectiveResolver<any, any, ContextType>;
  aws_oidc?: Aws_OidcDirectiveResolver<any, any, ContextType>;
  aws_publish?: Aws_PublishDirectiveResolver<any, any, ContextType>;
  aws_api_key?: Aws_Api_KeyDirectiveResolver<any, any, ContextType>;
  aws_cognito_user_pools?: Aws_Cognito_User_PoolsDirectiveResolver<
    any,
    any,
    ContextType
  >;
  aws_subscribe?: Aws_SubscribeDirectiveResolver<any, any, ContextType>;
};

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
