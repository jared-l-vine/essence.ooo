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

	#set( $values = $util.dynamodb.toMapValues($ctx.args) )
	#set( $values.created_at = $util.dynamodb.toString($util.time.nowISO8601()))

	"attributeValues" : $util.toJson($values),
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