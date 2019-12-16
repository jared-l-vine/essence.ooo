
resource "aws_dynamodb_table" "users" {
  name         = "NexusUsers"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "Id"

  attribute {
    name = "Id"
    type = "S"
  }

  tags = {
    App  = "Nexus"
    Site = "essence.ooo"
  }
}
resource "aws_appsync_datasource" "users" {
  api_id           = "${aws_appsync_graphql_api.nexus.id}"
  name             = "users"
  service_role_arn = "${aws_iam_role.nexus_appsync_role.arn}"
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = "${aws_dynamodb_table.users.name}"
  }
}


resource "aws_appsync_resolver" "users_user" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "user"
  type        = "Query"
  data_source = "${aws_appsync_datasource.users.name}"

  request_template = jsonencode({
    "version" : "2018-05-29",
    "operation" : "GetItem",
    "key" : {
      "id" : { "S" : "${context.arguments.id}" },
    }
  })

  response_template = <<EOF
$utils.toJson($context.result)
EOF
}

resource "aws_appsync_resolver" "users_createUser" {
  api_id      = "${aws_appsync_graphql_api.nexus.id}"
  field       = "createUser"
  type        = "Mutation"
  data_source = "${aws_appsync_datasource.users.name}"

  request_template = <<EOF
{
  "version" : "2017-02-28",
  "operation" : "PutItem",
  "key": {
    "id" : $util.dynamodb.toDynamoDBJson($util.autoId())
  },

  #set( $values = $util.dynamodb.toMapValues($ctx.args) )

  "attributeValues" : $util.toJson($values)
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