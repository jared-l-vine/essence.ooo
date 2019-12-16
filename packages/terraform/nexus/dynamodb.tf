# TABLES GO HERE
resource "aws_dynamodb_table" "nexus_listing_table" {
  name           = "NexusListings"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "Id"

  attribute {
    name = "Id"
    type = "S"
  }

  attribute {
    name = "Title"
    type = "S"
  }

  tags = {
    App         = "Nexus"
    Site        = "essence.ooo"
  }
}
resource "aws_appsync_datasource" "nexus_appsync_datasource_listings" {
  api_id           = "${aws_appsync_graphql_api.nexus_graphql_api.id}"
  name             = "nexus_appsync_datasource_listings"
  service_role_arn = "${aws_iam_role.nexus_appsync_role.arn}"
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = "${aws_dynamodb_table.nexus_listing_table.name}"
  }
}


# resource "aws_dynamodb_table" "nexus_users_table" {
#   name           = "NexusUsers"
#   billing_mode   = "PAY_PER_REQUEST"
#   hash_key       = "Id"
#   attribute {
#     name = "Id"
#     type = "S"
#   }
#   attribute {
#     name = "Title"
#     type = "S"
#   }
#   tags = {
#     App         = "Nexus"
#     Site        = "essence.ooo"
#   }
# }
# resource "aws_appsync_datasource" "nexus_appsync_datasource" {
#   api_id           = "${aws_appsync_graphql_api.nexus_graphql_api.id}"
#   name             = "tf_appsync_example"
#   service_role_arn = "${aws_iam_role.example.arn}"
#   type             = "AMAZON_DYNAMODB"

#   dynamodb_config {
#     table_name = "${aws_dynamodb_table.example.name}"
#   }
# }
