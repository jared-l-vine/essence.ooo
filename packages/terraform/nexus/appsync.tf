
resource "aws_appsync_graphql_api" "nexus" {
  authentication_type = "API_KEY"
  name                = "nexus"
  schema              = filebase64("./schema.graphql")

  tags = {
    App  = "Nexus"
    Site = "essence.ooo"
  }
}
