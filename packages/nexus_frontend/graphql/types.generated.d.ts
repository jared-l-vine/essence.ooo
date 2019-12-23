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
  uuid: any;
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

/** columns and relationships of "listings" */
export type Listings = {
  __typename?: "listings";
  created_at: Scalars["timestamptz"];
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  /** An object relationship */
  owner?: Maybe<Users>;
  owner_id: Scalars["Int"];
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "listings" */
export type Listings_Aggregate = {
  __typename?: "listings_aggregate";
  aggregate?: Maybe<Listings_Aggregate_Fields>;
  nodes: Array<Listings>;
};

/** aggregate fields of "listings" */
export type Listings_Aggregate_Fields = {
  __typename?: "listings_aggregate_fields";
  avg?: Maybe<Listings_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Listings_Max_Fields>;
  min?: Maybe<Listings_Min_Fields>;
  stddev?: Maybe<Listings_Stddev_Fields>;
  stddev_pop?: Maybe<Listings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Listings_Stddev_Samp_Fields>;
  sum?: Maybe<Listings_Sum_Fields>;
  var_pop?: Maybe<Listings_Var_Pop_Fields>;
  var_samp?: Maybe<Listings_Var_Samp_Fields>;
  variance?: Maybe<Listings_Variance_Fields>;
};

/** aggregate fields of "listings" */
export type Listings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Listings_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "listings" */
export type Listings_Aggregate_Order_By = {
  avg?: Maybe<Listings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Listings_Max_Order_By>;
  min?: Maybe<Listings_Min_Order_By>;
  stddev?: Maybe<Listings_Stddev_Order_By>;
  stddev_pop?: Maybe<Listings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Listings_Stddev_Samp_Order_By>;
  sum?: Maybe<Listings_Sum_Order_By>;
  var_pop?: Maybe<Listings_Var_Pop_Order_By>;
  var_samp?: Maybe<Listings_Var_Samp_Order_By>;
  variance?: Maybe<Listings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "listings" */
export type Listings_Arr_Rel_Insert_Input = {
  data: Array<Listings_Insert_Input>;
  on_conflict?: Maybe<Listings_On_Conflict>;
};

/** aggregate avg on columns */
export type Listings_Avg_Fields = {
  __typename?: "listings_avg_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "listings" */
export type Listings_Avg_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "listings". All fields are combined with a logical 'AND'. */
export type Listings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Listings_Bool_Exp>>>;
  _not?: Maybe<Listings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Listings_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  edition?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_posted?: Maybe<Timestamptz_Comparison_Exp>;
  medium?: Maybe<String_Comparison_Exp>;
  owner?: Maybe<Users_Bool_Exp>;
  owner_id?: Maybe<Int_Comparison_Exp>;
  players?: Maybe<Int_Comparison_Exp>;
  schedule?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "listings" */
export enum Listings_Constraint {
  /** unique or primary key constraint */
  ListingsPkey = "listings_pkey"
}

/** input type for incrementing integer columne in table "listings" */
export type Listings_Inc_Input = {
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "listings" */
export type Listings_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner?: Maybe<Users_Obj_Rel_Insert_Input>;
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Listings_Max_Fields = {
  __typename?: "listings_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "listings" */
export type Listings_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Listings_Min_Fields = {
  __typename?: "listings_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "listings" */
export type Listings_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "listings" */
export type Listings_Mutation_Response = {
  __typename?: "listings_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Listings>;
};

/** input type for inserting object relation for remote table "listings" */
export type Listings_Obj_Rel_Insert_Input = {
  data: Listings_Insert_Input;
  on_conflict?: Maybe<Listings_On_Conflict>;
};

/** on conflict condition type for table "listings" */
export type Listings_On_Conflict = {
  constraint: Listings_Constraint;
  update_columns: Array<Listings_Update_Column>;
  where?: Maybe<Listings_Bool_Exp>;
};

/** ordering options when selecting data from "listings" */
export type Listings_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  edition?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_posted?: Maybe<Order_By>;
  medium?: Maybe<Order_By>;
  owner?: Maybe<Users_Order_By>;
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
  schedule?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "listings" */
export enum Listings_Select_Column {
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
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "listings" */
export type Listings_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  edition?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  last_posted?: Maybe<Scalars["timestamptz"]>;
  medium?: Maybe<Scalars["String"]>;
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
  schedule?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Listings_Stddev_Fields = {
  __typename?: "listings_stddev_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "listings" */
export type Listings_Stddev_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Listings_Stddev_Pop_Fields = {
  __typename?: "listings_stddev_pop_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "listings" */
export type Listings_Stddev_Pop_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Listings_Stddev_Samp_Fields = {
  __typename?: "listings_stddev_samp_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "listings" */
export type Listings_Stddev_Samp_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Listings_Sum_Fields = {
  __typename?: "listings_sum_fields";
  owner_id?: Maybe<Scalars["Int"]>;
  players?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "listings" */
export type Listings_Sum_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** update columns of table "listings" */
export enum Listings_Update_Column {
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
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Listings_Var_Pop_Fields = {
  __typename?: "listings_var_pop_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "listings" */
export type Listings_Var_Pop_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Listings_Var_Samp_Fields = {
  __typename?: "listings_var_samp_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "listings" */
export type Listings_Var_Samp_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Listings_Variance_Fields = {
  __typename?: "listings_variance_fields";
  owner_id?: Maybe<Scalars["Float"]>;
  players?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "listings" */
export type Listings_Variance_Order_By = {
  owner_id?: Maybe<Order_By>;
  players?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "listings" */
  delete_listings?: Maybe<Listings_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "listings" */
  insert_listings?: Maybe<Listings_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "listings" */
  update_listings?: Maybe<Listings_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootDelete_ListingsArgs = {
  where: Listings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootInsert_ListingsArgs = {
  objects: Array<Listings_Insert_Input>;
  on_conflict?: Maybe<Listings_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ListingsArgs = {
  _inc?: Maybe<Listings_Inc_Input>;
  _set?: Maybe<Listings_Set_Input>;
  where: Listings_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
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
  /** fetch data from the table: "listings" */
  listings: Array<Listings>;
  /** fetch aggregated fields from the table: "listings" */
  listings_aggregate: Listings_Aggregate;
  /** fetch data from the table: "listings" using primary key columns */
  listings_by_pk?: Maybe<Listings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootListingsArgs = {
  distinct_on?: Maybe<Array<Listings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listings_Order_By>>;
  where?: Maybe<Listings_Bool_Exp>;
};

/** query root */
export type Query_RootListings_AggregateArgs = {
  distinct_on?: Maybe<Array<Listings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listings_Order_By>>;
  where?: Maybe<Listings_Bool_Exp>;
};

/** query root */
export type Query_RootListings_By_PkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["Int"];
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
  /** fetch data from the table: "listings" */
  listings: Array<Listings>;
  /** fetch aggregated fields from the table: "listings" */
  listings_aggregate: Listings_Aggregate;
  /** fetch data from the table: "listings" using primary key columns */
  listings_by_pk?: Maybe<Listings>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootListingsArgs = {
  distinct_on?: Maybe<Array<Listings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listings_Order_By>>;
  where?: Maybe<Listings_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootListings_AggregateArgs = {
  distinct_on?: Maybe<Array<Listings_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Listings_Order_By>>;
  where?: Maybe<Listings_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootListings_By_PkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["Int"];
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  avatar?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  discriminator: Scalars["Int"];
  id: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
  username: Scalars["String"];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: "users_avg_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discriminator?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey"
}

/** input type for incrementing integer columne in table "users" */
export type Users_Inc_Input = {
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  avatar?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
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

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: "users_stddev_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: "users_stddev_pop_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: "users_stddev_samp_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: "users_sum_fields";
  discriminator?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
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
export type Users_Var_Pop_Fields = {
  __typename?: "users_var_pop_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: "users_var_samp_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: "users_variance_fields";
  discriminator?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  discriminator?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
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
  listings_select_column: Listings_Select_Column;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  listings_order_by: Listings_Order_By;
  order_by: Order_By;
  users_order_by: Users_Order_By;
  listings_bool_exp: Listings_Bool_Exp;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars["timestamptz"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  String_comparison_exp: String_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars["String"]>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
  uuid: ResolverTypeWrapper<Scalars["uuid"]>;
  users_bool_exp: Users_Bool_Exp;
  Int_comparison_exp: Int_Comparison_Exp;
  listings: ResolverTypeWrapper<Listings>;
  users: ResolverTypeWrapper<Users>;
  listings_aggregate: ResolverTypeWrapper<Listings_Aggregate>;
  listings_aggregate_fields: ResolverTypeWrapper<Listings_Aggregate_Fields>;
  listings_avg_fields: ResolverTypeWrapper<Listings_Avg_Fields>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  listings_max_fields: ResolverTypeWrapper<Listings_Max_Fields>;
  listings_min_fields: ResolverTypeWrapper<Listings_Min_Fields>;
  listings_stddev_fields: ResolverTypeWrapper<Listings_Stddev_Fields>;
  listings_stddev_pop_fields: ResolverTypeWrapper<Listings_Stddev_Pop_Fields>;
  listings_stddev_samp_fields: ResolverTypeWrapper<Listings_Stddev_Samp_Fields>;
  listings_sum_fields: ResolverTypeWrapper<Listings_Sum_Fields>;
  listings_var_pop_fields: ResolverTypeWrapper<Listings_Var_Pop_Fields>;
  listings_var_samp_fields: ResolverTypeWrapper<Listings_Var_Samp_Fields>;
  listings_variance_fields: ResolverTypeWrapper<Listings_Variance_Fields>;
  users_select_column: Users_Select_Column;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_avg_fields: ResolverTypeWrapper<Users_Avg_Fields>;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_stddev_fields: ResolverTypeWrapper<Users_Stddev_Fields>;
  users_stddev_pop_fields: ResolverTypeWrapper<Users_Stddev_Pop_Fields>;
  users_stddev_samp_fields: ResolverTypeWrapper<Users_Stddev_Samp_Fields>;
  users_sum_fields: ResolverTypeWrapper<Users_Sum_Fields>;
  users_var_pop_fields: ResolverTypeWrapper<Users_Var_Pop_Fields>;
  users_var_samp_fields: ResolverTypeWrapper<Users_Var_Samp_Fields>;
  users_variance_fields: ResolverTypeWrapper<Users_Variance_Fields>;
  mutation_root: ResolverTypeWrapper<{}>;
  listings_mutation_response: ResolverTypeWrapper<Listings_Mutation_Response>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  listings_insert_input: Listings_Insert_Input;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_insert_input: Users_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_constraint: Users_Constraint;
  users_update_column: Users_Update_Column;
  listings_on_conflict: Listings_On_Conflict;
  listings_constraint: Listings_Constraint;
  listings_update_column: Listings_Update_Column;
  listings_inc_input: Listings_Inc_Input;
  listings_set_input: Listings_Set_Input;
  users_inc_input: Users_Inc_Input;
  users_set_input: Users_Set_Input;
  subscription_root: ResolverTypeWrapper<{}>;
  listings_aggregate_order_by: Listings_Aggregate_Order_By;
  listings_avg_order_by: Listings_Avg_Order_By;
  listings_max_order_by: Listings_Max_Order_By;
  listings_min_order_by: Listings_Min_Order_By;
  listings_stddev_order_by: Listings_Stddev_Order_By;
  listings_stddev_pop_order_by: Listings_Stddev_Pop_Order_By;
  listings_stddev_samp_order_by: Listings_Stddev_Samp_Order_By;
  listings_sum_order_by: Listings_Sum_Order_By;
  listings_var_pop_order_by: Listings_Var_Pop_Order_By;
  listings_var_samp_order_by: Listings_Var_Samp_Order_By;
  listings_variance_order_by: Listings_Variance_Order_By;
  listings_arr_rel_insert_input: Listings_Arr_Rel_Insert_Input;
  listings_obj_rel_insert_input: Listings_Obj_Rel_Insert_Input;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_avg_order_by: Users_Avg_Order_By;
  users_max_order_by: Users_Max_Order_By;
  users_min_order_by: Users_Min_Order_By;
  users_stddev_order_by: Users_Stddev_Order_By;
  users_stddev_pop_order_by: Users_Stddev_Pop_Order_By;
  users_stddev_samp_order_by: Users_Stddev_Samp_Order_By;
  users_sum_order_by: Users_Sum_Order_By;
  users_var_pop_order_by: Users_Var_Pop_Order_By;
  users_var_samp_order_by: Users_Var_Samp_Order_By;
  users_variance_order_by: Users_Variance_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  query_root: {};
  listings_select_column: Listings_Select_Column;
  Int: Scalars["Int"];
  listings_order_by: Listings_Order_By;
  order_by: Order_By;
  users_order_by: Users_Order_By;
  listings_bool_exp: Listings_Bool_Exp;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  timestamptz: Scalars["timestamptz"];
  Boolean: Scalars["Boolean"];
  String_comparison_exp: String_Comparison_Exp;
  String: Scalars["String"];
  uuid_comparison_exp: Uuid_Comparison_Exp;
  uuid: Scalars["uuid"];
  users_bool_exp: Users_Bool_Exp;
  Int_comparison_exp: Int_Comparison_Exp;
  listings: Listings;
  users: Users;
  listings_aggregate: Listings_Aggregate;
  listings_aggregate_fields: Listings_Aggregate_Fields;
  listings_avg_fields: Listings_Avg_Fields;
  Float: Scalars["Float"];
  listings_max_fields: Listings_Max_Fields;
  listings_min_fields: Listings_Min_Fields;
  listings_stddev_fields: Listings_Stddev_Fields;
  listings_stddev_pop_fields: Listings_Stddev_Pop_Fields;
  listings_stddev_samp_fields: Listings_Stddev_Samp_Fields;
  listings_sum_fields: Listings_Sum_Fields;
  listings_var_pop_fields: Listings_Var_Pop_Fields;
  listings_var_samp_fields: Listings_Var_Samp_Fields;
  listings_variance_fields: Listings_Variance_Fields;
  users_select_column: Users_Select_Column;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_avg_fields: Users_Avg_Fields;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_stddev_fields: Users_Stddev_Fields;
  users_stddev_pop_fields: Users_Stddev_Pop_Fields;
  users_stddev_samp_fields: Users_Stddev_Samp_Fields;
  users_sum_fields: Users_Sum_Fields;
  users_var_pop_fields: Users_Var_Pop_Fields;
  users_var_samp_fields: Users_Var_Samp_Fields;
  users_variance_fields: Users_Variance_Fields;
  mutation_root: {};
  listings_mutation_response: Listings_Mutation_Response;
  users_mutation_response: Users_Mutation_Response;
  listings_insert_input: Listings_Insert_Input;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_insert_input: Users_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_constraint: Users_Constraint;
  users_update_column: Users_Update_Column;
  listings_on_conflict: Listings_On_Conflict;
  listings_constraint: Listings_Constraint;
  listings_update_column: Listings_Update_Column;
  listings_inc_input: Listings_Inc_Input;
  listings_set_input: Listings_Set_Input;
  users_inc_input: Users_Inc_Input;
  users_set_input: Users_Set_Input;
  subscription_root: {};
  listings_aggregate_order_by: Listings_Aggregate_Order_By;
  listings_avg_order_by: Listings_Avg_Order_By;
  listings_max_order_by: Listings_Max_Order_By;
  listings_min_order_by: Listings_Min_Order_By;
  listings_stddev_order_by: Listings_Stddev_Order_By;
  listings_stddev_pop_order_by: Listings_Stddev_Pop_Order_By;
  listings_stddev_samp_order_by: Listings_Stddev_Samp_Order_By;
  listings_sum_order_by: Listings_Sum_Order_By;
  listings_var_pop_order_by: Listings_Var_Pop_Order_By;
  listings_var_samp_order_by: Listings_Var_Samp_Order_By;
  listings_variance_order_by: Listings_Variance_Order_By;
  listings_arr_rel_insert_input: Listings_Arr_Rel_Insert_Input;
  listings_obj_rel_insert_input: Listings_Obj_Rel_Insert_Input;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_avg_order_by: Users_Avg_Order_By;
  users_max_order_by: Users_Max_Order_By;
  users_min_order_by: Users_Min_Order_By;
  users_stddev_order_by: Users_Stddev_Order_By;
  users_stddev_pop_order_by: Users_Stddev_Pop_Order_By;
  users_stddev_samp_order_by: Users_Stddev_Samp_Order_By;
  users_sum_order_by: Users_Sum_Order_By;
  users_var_pop_order_by: Users_Var_Pop_Order_By;
  users_var_samp_order_by: Users_Var_Samp_Order_By;
  users_variance_order_by: Users_Variance_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
};

export type ListingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings"] = ResolversParentTypes["listings"]
> = {
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  edition?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["uuid"], ParentType, ContextType>;
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes["users"]>, ParentType, ContextType>;
  owner_id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
};

export type Listings_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_aggregate"] = ResolversParentTypes["listings_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["listings_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["listings"]>, ParentType, ContextType>;
};

export type Listings_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_aggregate_fields"] = ResolversParentTypes["listings_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["listings_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType,
    Listings_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<
    Maybe<ResolversTypes["listings_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["listings_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["listings_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["listings_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["listings_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["listings_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["listings_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["listings_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["listings_variance_fields"]>,
    ParentType,
    ContextType
  >;
};

export type Listings_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_avg_fields"] = ResolversParentTypes["listings_avg_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_max_fields"] = ResolversParentTypes["listings_max_fields"]
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
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Listings_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_min_fields"] = ResolversParentTypes["listings_min_fields"]
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
  last_posted?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  medium?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
};

export type Listings_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_mutation_response"] = ResolversParentTypes["listings_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes["listings"]>,
    ParentType,
    ContextType
  >;
};

export type Listings_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_stddev_fields"] = ResolversParentTypes["listings_stddev_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_stddev_pop_fields"] = ResolversParentTypes["listings_stddev_pop_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_stddev_samp_fields"] = ResolversParentTypes["listings_stddev_samp_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_sum_fields"] = ResolversParentTypes["listings_sum_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type Listings_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_var_pop_fields"] = ResolversParentTypes["listings_var_pop_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_var_samp_fields"] = ResolversParentTypes["listings_var_samp_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Listings_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["listings_variance_fields"] = ResolversParentTypes["listings_variance_fields"]
> = {
  owner_id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Mutation_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["mutation_root"] = ResolversParentTypes["mutation_root"]
> = {
  delete_listings?: Resolver<
    Maybe<ResolversTypes["listings_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_ListingsArgs, "where">
  >;
  delete_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootDelete_UsersArgs, "where">
  >;
  insert_listings?: Resolver<
    Maybe<ResolversTypes["listings_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_ListingsArgs, "objects">
  >;
  insert_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootInsert_UsersArgs, "objects">
  >;
  update_listings?: Resolver<
    Maybe<ResolversTypes["listings_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_ListingsArgs, "where">
  >;
  update_users?: Resolver<
    Maybe<ResolversTypes["users_mutation_response"]>,
    ParentType,
    ContextType,
    RequireFields<Mutation_RootUpdate_UsersArgs, "where">
  >;
};

export type Query_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["query_root"] = ResolversParentTypes["query_root"]
> = {
  listings?: Resolver<
    Array<ResolversTypes["listings"]>,
    ParentType,
    ContextType,
    Query_RootListingsArgs
  >;
  listings_aggregate?: Resolver<
    ResolversTypes["listings_aggregate"],
    ParentType,
    ContextType,
    Query_RootListings_AggregateArgs
  >;
  listings_by_pk?: Resolver<
    Maybe<ResolversTypes["listings"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootListings_By_PkArgs, "id">
  >;
  users?: Resolver<
    Array<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    Query_RootUsersArgs
  >;
  users_aggregate?: Resolver<
    ResolversTypes["users_aggregate"],
    ParentType,
    ContextType,
    Query_RootUsers_AggregateArgs
  >;
  users_by_pk?: Resolver<
    Maybe<ResolversTypes["users"]>,
    ParentType,
    ContextType,
    RequireFields<Query_RootUsers_By_PkArgs, "id">
  >;
};

export type Subscription_RootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["subscription_root"] = ResolversParentTypes["subscription_root"]
> = {
  listings?: SubscriptionResolver<
    Array<ResolversTypes["listings"]>,
    "listings",
    ParentType,
    ContextType,
    Subscription_RootListingsArgs
  >;
  listings_aggregate?: SubscriptionResolver<
    ResolversTypes["listings_aggregate"],
    "listings_aggregate",
    ParentType,
    ContextType,
    Subscription_RootListings_AggregateArgs
  >;
  listings_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["listings"]>,
    "listings_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootListings_By_PkArgs, "id">
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes["users"]>,
    "users",
    ParentType,
    ContextType,
    Subscription_RootUsersArgs
  >;
  users_aggregate?: SubscriptionResolver<
    ResolversTypes["users_aggregate"],
    "users_aggregate",
    ParentType,
    ContextType,
    Subscription_RootUsers_AggregateArgs
  >;
  users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes["users"]>,
    "users_by_pk",
    ParentType,
    ContextType,
    RequireFields<Subscription_RootUsers_By_PkArgs, "id">
  >;
};

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["timestamptz"], any> {
  name: "timestamptz";
}

export type UsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users"] = ResolversParentTypes["users"]
> = {
  avatar?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  discriminator?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes["timestamptz"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type Users_AggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate"] = ResolversParentTypes["users_aggregate"]
> = {
  aggregate?: Resolver<
    Maybe<ResolversTypes["users_aggregate_fields"]>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_aggregate_fields"] = ResolversParentTypes["users_aggregate_fields"]
> = {
  avg?: Resolver<
    Maybe<ResolversTypes["users_avg_fields"]>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType,
    Users_Aggregate_FieldsCountArgs
  >;
  max?: Resolver<
    Maybe<ResolversTypes["users_max_fields"]>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes["users_min_fields"]>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes["users_stddev_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes["users_stddev_pop_fields"]>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes["users_stddev_samp_fields"]>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes["users_sum_fields"]>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes["users_var_pop_fields"]>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes["users_var_samp_fields"]>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes["users_variance_fields"]>,
    ParentType,
    ContextType
  >;
};

export type Users_Avg_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_avg_fields"] = ResolversParentTypes["users_avg_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_max_fields"] = ResolversParentTypes["users_max_fields"]
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
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_min_fields"] = ResolversParentTypes["users_min_fields"]
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
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updated_at?: Resolver<
    Maybe<ResolversTypes["timestamptz"]>,
    ParentType,
    ContextType
  >;
  username?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_mutation_response"] = ResolversParentTypes["users_mutation_response"]
> = {
  affected_rows?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes["users"]>, ParentType, ContextType>;
};

export type Users_Stddev_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_stddev_fields"] = ResolversParentTypes["users_stddev_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Stddev_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_stddev_pop_fields"] = ResolversParentTypes["users_stddev_pop_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Stddev_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_stddev_samp_fields"] = ResolversParentTypes["users_stddev_samp_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Sum_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_sum_fields"] = ResolversParentTypes["users_sum_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
};

export type Users_Var_Pop_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_var_pop_fields"] = ResolversParentTypes["users_var_pop_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Var_Samp_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_var_samp_fields"] = ResolversParentTypes["users_var_samp_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type Users_Variance_FieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["users_variance_fields"] = ResolversParentTypes["users_variance_fields"]
> = {
  discriminator?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["uuid"], any> {
  name: "uuid";
}

export type Resolvers<ContextType = any> = {
  listings?: ListingsResolvers<ContextType>;
  listings_aggregate?: Listings_AggregateResolvers<ContextType>;
  listings_aggregate_fields?: Listings_Aggregate_FieldsResolvers<ContextType>;
  listings_avg_fields?: Listings_Avg_FieldsResolvers<ContextType>;
  listings_max_fields?: Listings_Max_FieldsResolvers<ContextType>;
  listings_min_fields?: Listings_Min_FieldsResolvers<ContextType>;
  listings_mutation_response?: Listings_Mutation_ResponseResolvers<ContextType>;
  listings_stddev_fields?: Listings_Stddev_FieldsResolvers<ContextType>;
  listings_stddev_pop_fields?: Listings_Stddev_Pop_FieldsResolvers<ContextType>;
  listings_stddev_samp_fields?: Listings_Stddev_Samp_FieldsResolvers<
    ContextType
  >;
  listings_sum_fields?: Listings_Sum_FieldsResolvers<ContextType>;
  listings_var_pop_fields?: Listings_Var_Pop_FieldsResolvers<ContextType>;
  listings_var_samp_fields?: Listings_Var_Samp_FieldsResolvers<ContextType>;
  listings_variance_fields?: Listings_Variance_FieldsResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_avg_fields?: Users_Avg_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  users_stddev_fields?: Users_Stddev_FieldsResolvers<ContextType>;
  users_stddev_pop_fields?: Users_Stddev_Pop_FieldsResolvers<ContextType>;
  users_stddev_samp_fields?: Users_Stddev_Samp_FieldsResolvers<ContextType>;
  users_sum_fields?: Users_Sum_FieldsResolvers<ContextType>;
  users_var_pop_fields?: Users_Var_Pop_FieldsResolvers<ContextType>;
  users_var_samp_fields?: Users_Var_Samp_FieldsResolvers<ContextType>;
  users_variance_fields?: Users_Variance_FieldsResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
