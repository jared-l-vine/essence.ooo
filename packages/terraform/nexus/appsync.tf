
resource "aws_appsync_graphql_api" "nexus_graphql_api" {
  authentication_type = "API_KEY"
  name                = "nexus_graphql_api"
}
