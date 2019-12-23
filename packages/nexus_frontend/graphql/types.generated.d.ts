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
  timestamptz: any;
  bigint: any;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Scalars["bigint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Scalars["bigint"]>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** columns and relationships of "listing" */
export type Listing = {
  __typename?: "listing";
  created_at: Scalars["timestamptz"];
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  /** An object relationship */
  owner?: Maybe<User>;
  owner_id: Scalars["bigint"];
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  splat?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "listing" */
export type Listing_Aggregate = {
  __typename?: "listing_aggregate";
  aggregate?: Maybe<Listing_Aggregate_Fields>;
  nodes: Array<Listing>;
};

/** aggregate fields of "listing" */
export type Listing_Aggregate_Fields = {
  __typename?: "listing_aggregate_fields";
  avg?: Maybe<Listing_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Listing_Max_Fields>;
  min?: Maybe<Listing_Min_Fields>;
  stddev?: Maybe<Listing_Stddev_Fields>;
  stddev_pop?: Maybe<Listing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Listing_Stddev_Samp_Fields>;
  sum?: Maybe<Listing_Sum_Fields>;
  var_pop?: Maybe<Listing_Var_Pop_Fields>;
  var_samp?: Maybe<Listing_Var_Samp_Fields>;
  variance?: Maybe<Listing_Variance_Fields>;
};

/** aggregate fields of "listing" */
export type Listing_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Listing_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "listing" */
export type Listing_Aggregate_Order_By = {
  avg?: Maybe<Listing_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Listing_Max_Order_By>;
  min?: Maybe<Listing_Min_Order_By>;
  stddev?: Maybe<Listing_Stddev_Order_By>;
  stddev_pop?: Maybe<Listing_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Listing_Stddev_Samp_Order_By>;
  sum?: Maybe<Listing_Sum_Order_By>;
  var_pop?: Maybe<Listing_Var_Pop_Order_By>;
  var_samp?: Maybe<Listing_Var_Samp_Order_By>;
  variance?: Maybe<Listing_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "listing" */
export type Listing_Arr_Rel_Insert_Input = {
  data: Array<Listing_Insert_Input>;
  on_conflict?: Maybe<Listing_On_Conflict>;
};

/** aggregate avg on columns */
export type Listing_Avg_Fields = {
  __typename?: "listing_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "listing" */
export type Listing_Avg_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "listing". All fields are combined with a logical 'AND'. */
export type Listing_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Listing_Bool_Exp>>>;
  _not?: Maybe<Listing_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Listing_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  edition?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_posted?: Maybe<Timestamptz_Comparison_Exp>;
  medium?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<User_Bool_Exp>;
  owner_id?: Maybe<Bigint_Comparison_Exp>;
  players?: Maybe<Int_Comparison_Exp>;
  schedule?: Maybe<String_Comparison_Exp>;
  splat?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "listing" */
export enum Listing_Constraint {
  /** unique or primary key constraint */
  ListingPkey = "listing_pkey"
}

/** input type for incrementing integer columne in table "listing" */
export type Listing_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "listing" */
export type Listing_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner?: Maybe<User_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  splat?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Listing_Max_Fields = {
  __typename?: "listing_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  splat?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "listing" */
export type Listing_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  splat?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Listing_Min_Fields = {
  __typename?: "listing_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  splat?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "listing" */
export type Listing_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  splat?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "listing" */
export type Listing_Mutation_Response = {
  __typename?: "listing_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Listing>;
};

/** input type for inserting object relation for remote table "listing" */
export type Listing_Obj_Rel_Insert_Input = {
  data: Listing_Insert_Input;
  on_conflict?: Maybe<Listing_On_Conflict>;
};

/** on conflict condition type for table "listing" */
export type Listing_On_Conflict = {
  constraint: Listing_Constraint;
  update_columns: Array<Listing_Update_Column>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** ordering options when selecting data from "listing" */
export type Listing_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner?: Maybe<User_Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  splat?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "listing" */
export enum Listing_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Edition = "edition",
  /** column name */
  Id = "id",
  /** column name */
  LastPosted = "last_posted",
  /** column name */
  Medium = "medium",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Players = "players",
  /** column name */
  Schedule = "schedule",
  /** column name */
  Splat = "splat",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "listing" */
export type Listing_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  splat?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Listing_Stddev_Fields = {
  __typename?: "listing_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "listing" */
export type Listing_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Listing_Stddev_Pop_Fields = {
  __typename?: "listing_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "listing" */
export type Listing_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Listing_Stddev_Samp_Fields = {
  __typename?: "listing_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "listing" */
export type Listing_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Listing_Sum_Fields = {
  __typename?: "listing_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  owner_id?: Maybe<Scalars["bigint"]>;
  players?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "listing" */
export type Listing_Sum_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** update columns of table "listing" */
export enum Listing_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Edition = "edition",
  /** column name */
  Id = "id",
  /** column name */
  LastPosted = "last_posted",
  /** column name */
  Medium = "medium",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Players = "players",
  /** column name */
  Schedule = "schedule",
  /** column name */
  Splat = "splat",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Listing_Var_Pop_Fields = {
  __typename?: "listing_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "listing" */
export type Listing_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Listing_Var_Samp_Fields = {
  __typename?: "listing_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "listing" */
export type Listing_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Listing_Variance_Fields = {
  __typename?: "listing_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "listing" */
export type Listing_Variance_Order_By = {
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "listing" */
  delete_listing?: Maybe<Listing_Mutation_Response>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "listing" */
  insert_listing?: Maybe<Listing_Mutation_Response>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** update data of the table: "listing" */
  update_listing?: Maybe<Listing_Mutation_Response>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_ListingArgs = {
  where: Listing_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_ListingArgs = {
  objects: Array<Listing_Insert_Input>;
  on_conflict?: Maybe<Listing_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ListingArgs = {
  _inc?: Maybe<Listing_Inc_Input>;
  _set?: Maybe<Listing_Set_Input>;
  where: Listing_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "listing" */
  listing: Array<Listing>;
  /** fetch aggregated fields from the table: "listing" */
  listing_aggregate: Listing_Aggregate;
  /** fetch data from the table: "listing" using primary key columns */
  listing_by_pk?: Maybe<Listing>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** query root */
export type Query_RootListingArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** query root */
export type Query_RootListing_AggregateArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** query root */
export type Query_RootListing_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars["bigint"];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "listing" */
  listing: Array<Listing>;
  /** fetch aggregated fields from the table: "listing" */
  listing_aggregate: Listing_Aggregate;
  /** fetch data from the table: "listing" using primary key columns */
  listing_by_pk?: Maybe<Listing>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootListingArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootListing_AggregateArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootListing_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars["bigint"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  avatar?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  discriminator: Scalars["Int"];
  id: Scalars["bigint"];
  /** An array relationship */
  listings: Array<Listing>;
  /** An aggregated array relationship */
  listings_aggregate: Listing_Aggregate;
  updated_at: Scalars["timestamptz"];
  username: Scalars["String"];
};

/** columns and relationships of "user" */
export type UserListingsArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserListings_AggregateArgs = {
  distinct_on?: Maybe<Array<Listing_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listing_Order_By>>;
  where?: Maybe<Listing_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: "user_aggregate_fields";
  avg?: Maybe<User_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
  stddev?: Maybe<User_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Sum_Order_By>;
  var_pop?: Maybe<User_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Var_Samp_Order_By>;
  variance?: Maybe<User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: "user_avg_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discriminator?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  listings?: Maybe<Listing_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = "user_pkey"
}

/** input type for incrementing integer columne in table "user" */
export type User_Inc_Input = {
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
  listings?: Maybe<Listing_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: "user_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: "user_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listings_aggregate?: Maybe<Listing_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Discriminator = "discriminator",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username"
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: "user_stddev_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: "user_stddev_pop_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: "user_stddev_samp_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: "user_sum_fields";
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Discriminator = "discriminator",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username"
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: "user_var_pop_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: "user_var_samp_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: "user_variance_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
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
  query_root: ResolverTypeWrapper<{}>;
  listing_select_column: Listing_Select_Column;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  listing_order_by: Listing_Order_By;
  order_by: Order_By;
  user_order_by: User_Order_By;
  listing_aggregate_order_by: Listing_Aggregate_Order_By;
  listing_avg_order_by: Listing_Avg_Order_By;
  listing_max_order_by: Listing_Max_Order_By;
  listing_min_order_by: Listing_Min_Order_By;
  listing_stddev_order_by: Listing_Stddev_Order_By;
  listing_stddev_pop_order_by: Listing_Stddev_Pop_Order_By;
  listing_stddev_samp_order_by: Listing_Stddev_Samp_Order_By;
  listing_sum_order_by: Listing_Sum_Order_By;
  listing_var_pop_order_by: Listing_Var_Pop_Order_By;
  listing_var_samp_order_by: Listing_Var_Samp_Order_By;
  listing_variance_order_by: Listing_Variance_Order_By;
  listing_bool_exp: Listing_Bool_Exp;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Int_comparison_exp: Int_Comparison_Exp;
  user_bool_exp: User_Bool_Exp;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bigint: ResolverTypeWrapper<Scalars["bigint"]>;
  listing: ResolverTypeWrapper<Listing>;
  user: ResolverTypeWrapper<User>;
  listing_aggregate: ResolverTypeWrapper<Listing_Aggregate>;
  listing_aggregate_fields: ResolverTypeWrapper<Listing_Aggregate_Fields>;
  listing_avg_fields: ResolverTypeWrapper<Listing_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  listing_max_fields: ResolverTypeWrapper<Listing_Max_Fields>;
  listing_min_fields: ResolverTypeWrapper<Listing_Min_Fields>;
  listing_stddev_fields: ResolverTypeWrapper<Listing_Stddev_Fields>;
  listing_stddev_pop_fields: ResolverTypeWrapper<Listing_Stddev_Pop_Fields>;
  listing_stddev_samp_fields: ResolverTypeWrapper<Listing_Stddev_Samp_Fields>;
  listing_sum_fields: ResolverTypeWrapper<Listing_Sum_Fields>;
  listing_var_pop_fields: ResolverTypeWrapper<Listing_Var_Pop_Fields>;
  listing_var_samp_fields: ResolverTypeWrapper<Listing_Var_Samp_Fields>;
  listing_variance_fields: ResolverTypeWrapper<Listing_Variance_Fields>;
  user_select_column: User_Select_Column;
  user_aggregate: ResolverTypeWrapper<User_Aggregate>;
  user_aggregate_fields: ResolverTypeWrapper<User_Aggregate_Fields>;
  user_avg_fields: ResolverTypeWrapper<User_Avg_Fields>;
  user_max_fields: ResolverTypeWrapper<User_Max_Fields>;
  user_min_fields: ResolverTypeWrapper<User_Min_Fields>;
  user_stddev_fields: ResolverTypeWrapper<User_Stddev_Fields>;
  user_stddev_pop_fields: ResolverTypeWrapper<User_Stddev_Pop_Fields>;
  user_stddev_samp_fields: ResolverTypeWrapper<User_Stddev_Samp_Fields>;
  user_sum_fields: ResolverTypeWrapper<User_Sum_Fields>;
  user_var_pop_fields: ResolverTypeWrapper<User_Var_Pop_Fields>;
  user_var_samp_fields: ResolverTypeWrapper<User_Var_Samp_Fields>;
  user_variance_fields: ResolverTypeWrapper<User_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  listing_mutation_response: ResolverTypeWrapper<Listing_Mutation_Response>;
  user_mutation_response: ResolverTypeWrapper<User_Mutation_Response>;
  listing_insert_input: Listing_Insert_Input;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_insert_input: User_Insert_Input;
  listing_arr_rel_insert_input: Listing_Arr_Rel_Insert_Input;
  listing_on_conflict: Listing_On_Conflict;
  listing_constraint: Listing_Constraint;
  listing_update_column: Listing_Update_Column;
  user_on_conflict: User_On_Conflict;
  user_constraint: User_Constraint;
  user_update_column: User_Update_Column;
  listing_inc_input: Listing_Inc_Input;
  listing_set_input: Listing_Set_Input;
  user_inc_input: User_Inc_Input;
  user_set_input: User_Set_Input;
  subscription_root: ResolverTypeWrapper<{}>;
  listing_obj_rel_insert_input: Listing_Obj_Rel_Insert_Input;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_avg_order_by: User_Avg_Order_By;
  user_max_order_by: User_Max_Order_By;
  user_min_order_by: User_Min_Order_By;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_sum_order_by: User_Sum_Order_By;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_order_by: User_Variance_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  query_root: {};
  listing_select_column: Listing_Select_Column;
  Int: Scalars["Int"];
  listing_order_by: Listing_Order_By;
  order_by: Order_By;
  user_order_by: User_Order_By;
  listing_aggregate_order_by: Listing_Aggregate_Order_By;
  listing_avg_order_by: Listing_Avg_Order_By;
  listing_max_order_by: Listing_Max_Order_By;
  listing_min_order_by: Listing_Min_Order_By;
  listing_stddev_order_by: Listing_Stddev_Order_By;
  listing_stddev_pop_order_by: Listing_Stddev_Pop_Order_By;
  listing_stddev_samp_order_by: Listing_Stddev_Samp_Order_By;
  listing_sum_order_by: Listing_Sum_Order_By;
  listing_var_pop_order_by: Listing_Var_Pop_Order_By;
  listing_var_samp_order_by: Listing_Var_Samp_Order_By;
  listing_variance_order_by: Listing_Variance_Order_By;
  listing_bool_exp: Listing_Bool_Exp;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: Scalars["timestamptz"];
  Boolean: Scalars["Boolean"];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars["String"];
  Int_comparison_exp: Int_Comparison_Exp;
  user_bool_exp: User_Bool_Exp;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  bigint: Scalars["bigint"];
  listing: Listing;
  user: User;
  listing_aggregate: Listing_Aggregate;
  listing_aggregate_fields: Listing_Aggregate_Fields;
  listing_avg_fields: Listing_Avg_Fields;
  Float: Scalars["Float"];
  listing_max_fields: Listing_Max_Fields;
  listing_min_fields: Listing_Min_Fields;
  listing_stddev_fields: Listing_Stddev_Fields;
  listing_stddev_pop_fields: Listing_Stddev_Pop_Fields;
  listing_stddev_samp_fields: Listing_Stddev_Samp_Fields;
  listing_sum_fields: Listing_Sum_Fields;
  listing_var_pop_fields: Listing_Var_Pop_Fields;
  listing_var_samp_fields: Listing_Var_Samp_Fields;
  listing_variance_fields: Listing_Variance_Fields;
  user_select_column: User_Select_Column;
  user_aggregate: User_Aggregate;
  user_aggregate_fields: User_Aggregate_Fields;
  user_avg_fields: User_Avg_Fields;
  user_max_fields: User_Max_Fields;
  user_min_fields: User_Min_Fields;
  user_stddev_fields: User_Stddev_Fields;
  user_stddev_pop_fields: User_Stddev_Pop_Fields;
  user_stddev_samp_fields: User_Stddev_Samp_Fields;
  user_sum_fields: User_Sum_Fields;
  user_var_pop_fields: User_Var_Pop_Fields;
  user_var_samp_fields: User_Var_Samp_Fields;
  user_variance_fields: User_Variance_Fields;
  mutation_root: {};
  listing_mutation_response: Listing_Mutation_Response;
  user_mutation_response: User_Mutation_Response;
  listing_insert_input: Listing_Insert_Input;
  user_obj_rel_insert_input: User_Obj_Rel_Insert_Input;
  user_insert_input: User_Insert_Input;
  listing_arr_rel_insert_input: Listing_Arr_Rel_Insert_Input;
  listing_on_conflict: Listing_On_Conflict;
  listing_constraint: Listing_Constraint;
  listing_update_column: Listing_Update_Column;
  user_on_conflict: User_On_Conflict;
  user_constraint: User_Constraint;
  user_update_column: User_Update_Column;
  listing_inc_input: Listing_Inc_Input;
  listing_set_input: Listing_Set_Input;
  user_inc_input: User_Inc_Input;
  user_set_input: User_Set_Input;
  subscription_root: {};
  listing_obj_rel_insert_input: Listing_Obj_Rel_Insert_Input;
  user_aggregate_order_by: User_Aggregate_Order_By;
  user_avg_order_by: User_Avg_Order_By;
  user_max_order_by: User_Max_Order_By;
  user_min_order_by: User_Min_Order_By;
  user_stddev_order_by: User_Stddev_Order_By;
  user_stddev_pop_order_by: User_Stddev_Pop_Order_By;
  user_stddev_samp_order_by: User_Stddev_Samp_Order_By;
  user_sum_order_by: User_Sum_Order_By;
  user_var_pop_order_by: User_Var_Pop_Order_By;
  user_var_samp_order_by: User_Var_Samp_Order_By;
  user_variance_order_by: User_Variance_Order_By;
  user_arr_rel_insert_input: User_Arr_Rel_Insert_Input;
};

export interface BigintScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["bigint"], any> {
  name: "bigint";
}

export type ListingResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing"] = ResolversParentTypes["listing"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  edition?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["user"]>, ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes["bigint"], ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  splat?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
};

export type Listing_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_aggregate"] = ResolversParentTypes["listing_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["listing_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["listing"]>, ParentType, ContextType>;
};

export type Listing_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_aggregate_fields"] = ResolversParentTypes["listing_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["listing_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType,
    Listing_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<
    Maybe<ResolversTypes["listing_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["listing_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["listing_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["listing_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["listing_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["listing_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["listing_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["listing_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["listing_variance_fields"]>,
    ParentType,
    ContextType
  >;
};

export type Listing_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_avg_fields"] = ResolversParentTypes["listing_avg_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_max_fields"] = ResolversParentTypes["listing_max_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  edition?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  splat?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Listing_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_min_fields"] = ResolversParentTypes["listing_min_fields"]
> = {
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  edition?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  splat?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Listing_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_mutation_response"] = ResolversParentTypes["listing_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["listing"]>,
    ParentType,
    ContextType
  >;
};

export type Listing_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_stddev_fields"] = ResolversParentTypes["listing_stddev_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_stddev_pop_fields"] = ResolversParentTypes["listing_stddev_pop_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_stddev_samp_fields"] = ResolversParentTypes["listing_stddev_samp_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_sum_fields"] = ResolversParentTypes["listing_sum_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type Listing_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_var_pop_fields"] = ResolversParentTypes["listing_var_pop_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_var_samp_fields"] = ResolversParentTypes["listing_var_samp_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listing_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listing_variance_fields"] = ResolversParentTypes["listing_variance_fields"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_listing?: Resolver<
    Maybe<ResolversTypes["listing_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_ListingArgs, "where">
  >;
  delete_user?: Resolver<
    Maybe<ResolversTypes["user_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UserArgs, "where">
  >;
  insert_listing?: Resolver<
    Maybe<ResolversTypes["listing_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_ListingArgs, "objects">
  >;
  insert_user?: Resolver<
    Maybe<ResolversTypes["user_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UserArgs, "objects">
  >;
  update_listing?: Resolver<
    Maybe<ResolversTypes["listing_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_ListingArgs, "where">
  >;
  update_user?: Resolver<
    Maybe<ResolversTypes["user_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UserArgs, "where">
  >;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  listing?: Resolver<
    Array<ResolversTypes["listing"]>,
    ParentType,
    ContextType,
    Query_RootListingArgs
  >;
  listing_aggregate?: Resolver<
    ResolversTypes["listing_aggregate"],
    ParentType,
    ContextType,
    Query_RootListing_AggregateArgs
  >;
  listing_by_pk?: Resolver<
    Maybe<ResolversTypes["listing"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootListing_By_PkArgs, "id">
  >;
  user?: Resolver<
    Array<ResolversTypes["user"]>,
    ParentType,
    ContextType,
    Query_RootUserArgs
  >;
  user_aggregate?: Resolver<
    ResolversTypes["user_aggregate"],
    ParentType,
    ContextType,
    Query_RootUser_AggregateArgs
  >;
  user_by_pk?: Resolver<
    Maybe<ResolversTypes["user"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUser_By_PkArgs, "id">
  >;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  listing?: SubscriptionResolver<
    Array<ResolversTypes["listing"]>,
    "listing",
    ParentType,
    ContextType,
    Subscription_RootListingArgs
  >;
  listing_aggregate?: SubscriptionResolver<
    ResolversTypes["listing_aggregate"],
    "listing_aggregate",
    ParentType,
    ContextType,
    Subscription_RootListing_AggregateArgs
  >;
  listing_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["listing"]>,
    "listing_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootListing_By_PkArgs, "id">
  >;
  user?: SubscriptionResolver<
    Array<ResolversTypes["user"]>,
    "user",
    ParentType,
    ContextType,
    Subscription_RootUserArgs
  >;
  user_aggregate?: SubscriptionResolver<
    ResolversTypes["user_aggregate"],
    "user_aggregate",
    ParentType,
    ContextType,
    Subscription_RootUser_AggregateArgs
  >;
  user_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["user"]>,
    "user_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUser_By_PkArgs, "id">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user"] = ResolversParentTypes["user"]
> = {
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  discriminator?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["bigint"], ParentType, ContextType>;
  listings?: Resolver<
    Array<ResolversTypes["listing"]>,
    ParentType,
    ContextType,
    UserListingsArgs
  >;
  listings_aggregate?: Resolver<
    ResolversTypes["listing_aggregate"],
    ParentType,
    ContextType,
    UserListings_AggregateArgs
  >;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type User_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_aggregate"] = ResolversParentTypes["user_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["user_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["user"]>, ParentType, ContextType>;
};

export type User_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_aggregate_fields"] = ResolversParentTypes["user_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["user_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType,
    User_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<
    Maybe<ResolversTypes["user_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["user_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["user_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["user_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["user_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["user_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["user_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["user_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["user_variance_fields"]>,
    ParentType,
    ContextType
  >;
};

export type User_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_avg_fields"] = ResolversParentTypes["user_avg_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_max_fields"] = ResolversParentTypes["user_max_fields"]
> = {
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  discriminator?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type User_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_min_fields"] = ResolversParentTypes["user_min_fields"]
> = {
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  discriminator?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type User_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_mutation_response"] = ResolversParentTypes["user_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["user"]>, ParentType, ContextType>;
};

export type User_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_stddev_fields"] = ResolversParentTypes["user_stddev_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_stddev_pop_fields"] = ResolversParentTypes["user_stddev_pop_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_stddev_samp_fields"] = ResolversParentTypes["user_stddev_samp_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_sum_fields"] = ResolversParentTypes["user_sum_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["bigint"]>, ParentType, ContextType>;
};

export type User_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_var_pop_fields"] = ResolversParentTypes["user_var_pop_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_var_samp_fields"] = ResolversParentTypes["user_var_samp_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type User_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["user_variance_fields"] = ResolversParentTypes["user_variance_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  bigint?: GraphQLScalarType;
  listing?: ListingResolvers<ContextType>;
  listing_aggregate?: Listing_AggregateResolvers<ContextType>;
  listing_aggregate_fields?: Listing_Aggregate_FieldsResolvers<ContextType>;
  listing_avg_fields?: Listing_Avg_FieldsResolvers<ContextType>;
  listing_max_fields?: Listing_Max_FieldsResolvers<ContextType>;
  listing_min_fields?: Listing_Min_FieldsResolvers<ContextType>;
  listing_mutation_response?: Listing_Mutation_ResponseResolvers<ContextType>;
  listing_stddev_fields?: Listing_Stddev_FieldsResolvers<ContextType>;
  listing_stddev_pop_fields?: Listing_Stddev_Pop_FieldsResolvers<ContextType>;
  listing_stddev_samp_fields?: Listing_Stddev_Samp_FieldsResolvers<ContextType>;
  listing_sum_fields?: Listing_Sum_FieldsResolvers<ContextType>;
  listing_var_pop_fields?: Listing_Var_Pop_FieldsResolvers<ContextType>;
  listing_var_samp_fields?: Listing_Var_Samp_FieldsResolvers<ContextType>;
  listing_variance_fields?: Listing_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  user?: UserResolvers<ContextType>;
  user_aggregate?: User_AggregateResolvers<ContextType>;
  user_aggregate_fields?: User_Aggregate_FieldsResolvers<ContextType>;
  user_avg_fields?: User_Avg_FieldsResolvers<ContextType>;
  user_max_fields?: User_Max_FieldsResolvers<ContextType>;
  user_min_fields?: User_Min_FieldsResolvers<ContextType>;
  user_mutation_response?: User_Mutation_ResponseResolvers<ContextType>;
  user_stddev_fields?: User_Stddev_FieldsResolvers<ContextType>;
  user_stddev_pop_fields?: User_Stddev_Pop_FieldsResolvers<ContextType>;
  user_stddev_samp_fields?: User_Stddev_Samp_FieldsResolvers<ContextType>;
  user_sum_fields?: User_Sum_FieldsResolvers<ContextType>;
  user_var_pop_fields?: User_Var_Pop_FieldsResolvers<ContextType>;
  user_var_samp_fields?: User_Var_Samp_FieldsResolvers<ContextType>;
  user_variance_fields?: User_Variance_FieldsResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
