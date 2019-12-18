resource "aws_dynamodb_table" "listings" {
  name         = "NexusListings"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"

  attribute {
    name = "id"
    type = "S"
  }

  tags = {
    App  = "Nexus"
    Site = "essence.ooo"
  }
}

resource "aws_appsync_datasource" "listings" {
  api_id           = "${aws_appsync_graphql_api.nexus.id}"
  name             = "listings"
  service_role_arn = "${aws_iam_role.nexus_appsync_role.arn}"
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = "${aws_dynamodb_table.listings.name}"
  }
}

resource "aws_appsync_resolver" "listings_listing" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "listing"
  type        = "Query"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
	"version" : "2017-02-28",
	"operation" : "GetItem",
	"key" : {
		"id" : { "S" : $util.toJson($ctx.args.id) },
	}
}
EOF

  response_template = <<EOF
$utils.toJson($context.result)
EOF
}

resource "aws_appsync_resolver" "listings_createListing" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "createListing"
  type        = "Mutation"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
	"version" : "2017-02-28",
	"operation" : "PutItem",
	"key": {
		"id" : $util.dynamodb.toDynamoDBJson($util.autoId())
	},

	#set( $values = $ctx.args )
	#set( $values.id = $util.autoID())
	#set( $values.created_at = $util.time.nowEpochSeconds())
	#set( $values.version = "2019-12-17")

	"attributeValues" :  $util.toJson($util.dynamodb.toMapValues($values)),
	"condition": {
		"expression": "attribute_not_exists(#id)",
		"expressionNames": {
			"#id": "id",
		},
	},
}
EOF

  response_template = <<EOF
$utils.toJson($context.result)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_id" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "id"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result.id)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_title" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "title"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result.title)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_description" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "description"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result.description)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_created_at" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "created_at"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result.created_at)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_last_posted" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "last_posted"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result.last_posted)
EOF
}

resource "aws_appsync_resolver" "listings_Listing_owner" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "owner"
  type        = "Listing"
  data_source = "${aws_appsync_datasource.users.name}"

  request_template = <<EOF
{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.source.owner_id),
    }
}
EOF

  response_template = <<EOF
$util.toJson($ctx.result)
EOF
}

resource "aws_appsync_resolver" "listings_allListings" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "allListings"
  type        = "Query"
  data_source = "${aws_appsync_datasource.listings.name}"

  request_template = <<EOF
{
    "version" : "2017-02-28",
    "operation" : "Scan",
        #if( ${context.arguments.owner_id} )
    "filter" : {
      "expression" : "#owner_id = :owner_id",
      "expressionNames" : {
          "#owner_id" : "owner_id"
      },
     "expressionValues" : {
          ":owner_id" : { "S" : "${context.arguments.owner_id}" }
        }
	}
    #end
    #if( ${context.arguments.count} )
        ,"limit": ${context.arguments.count}
    #end
    #if( ${context.arguments.nextToken} )
        ,"nextToken": "${context.arguments.nextToken}"
    #end
}
EOF

  response_template = <<EOF
{
    "listings": $utils.toJson($context.result.items)
    #if( ${context.result.nextToken} )
        ,"nextToken": "${context.result.nextToken}"
    #end
}
EOF
}