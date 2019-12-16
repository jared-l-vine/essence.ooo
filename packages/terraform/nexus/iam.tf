
resource "aws_iam_role" "nexus_appsync_role" {
  name = "nexus_appsync_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "appsync.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "nexus_appsync_role_policy" {
  name = "nexus_appsync_role_policy"
  role = "${aws_iam_role.nexus_appsync_role.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "dynamodb:*"
      ],
      "Effect": "Allow",
      "Resource": [
        "${aws_dynamodb_table.nexus_appsync_role.arn}"
      ]
    }
  ]
}
EOF
}
