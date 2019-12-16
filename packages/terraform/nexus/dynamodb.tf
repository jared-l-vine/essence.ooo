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
