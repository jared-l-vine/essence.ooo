
resource "aws_appsync_graphql_api" "nexus" {
  authentication_type = "API_KEY"
  name                = "nexus"
  schema              = file("./schema.graphql")

  tags = {
    App  = "Nexus"
    Site = "essence.ooo"
  }
}
