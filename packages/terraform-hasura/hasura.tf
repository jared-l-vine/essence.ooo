provider "aws" {
  region = "us-east-1"
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "nexus"
  cidr = "10.0.0.0/16"

  azs              = ["us-east-1a", "us-east-1c"]
  database_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets   = ["10.0.101.0/24", "10.0.102.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
}

resource "aws_db_instance" "nexus" {
  allocated_storage    = 8
  storage_type         = "gp2"
  engine               = "postgres"
  instance_class       = "db.t3.micro"
  name                 = "nexus"
  username             = "emissary"
  password             = "uWlp8s7ADNTtvYgBO5qJ"
  db_subnet_group_name = "${module.vpc.database_subnet_group}"
}

# resource "aws_ecs_cluster" "nexus" {
#   name               = "nexus"
#   capacity_providers = ["FARGATE"]
#   setting            = [{ "name" = "containerInsights", value = "enabled" }]
# }

# resource "aws_ecs_task_definition" "hasura" {
#   depends_on               = ["aws_db_instance.nexus"]
#   family                   = "nexus-hasura"
#   requires_compatibilities = ["FARGATE"]
#   network_mode             = "awsvpc"
#   cpu                      = 256
#   memory                   = 512
#   container_definitions    = <<EOF
# [
#   {
#     "cpu": 256,
#     "environment": [
#       {
#         "name": "HASURA_GRAPHQL_ENABLE_CONSOLE",
#         "value": "true"
#       },
#       {
#         "name": "HASURA_GRAPHQL_DATABASE_URL",
#         "value": "postgres://emissary:uWlp8s7ADNTtvYgBO5qJ@${aws_db_instance.nexus.endpoint}/nexus"
#       }
#     ],
#     "image": "hasura/graphql-engine:latest",
#     "memory": 512,
#     "name": "hasura",
#     "essential": true,
#     "portMappings": [
#       {
#         "containerPort": 8080,
#         "hostPort": 8080
#       }
#     ]
#   }
# ]

# EOF
# }

# resource "aws_security_group" "hasura" {
#   depends_on = ["module.vpc"]
#   name       = "hasura"
#   vpc_id     = "${module.vpc.vpc_id}"

#   ingress {
#     from_port   = 8080
#     to_port     = 8080
#     protocol    = "tcp"
#     cidr_blocks = ["0.0.0.0/0"]
#   }

#   egress {
#     from_port   = 0
#     to_port     = 0
#     protocol    = "-1"
#     cidr_blocks = ["0.0.0.0/0"]

#   }
# }


# resource "aws_ecs_service" "hasura" {
#   name            = "hasura"
#   cluster         = "${aws_ecs_cluster.nexus.id}"
#   task_definition = "${aws_ecs_task_definition.hasura.arn}"
#   desired_count   = 1
#   launch_type     = "FARGATE"
#   # load_balancer {
#   #   elb_name       = "${aws_elb.elb.id}"
#   #   container_name = "${var.name}"
#   #   container_port = "3000"
#   # }
#   network_configuration {
#     assign_public_ip = "true"
#     security_groups  = ["${aws_security_group.hasura.id}"]
#     subnets          = concat(module.vpc.database_subnets, module.vpc.public_subnets)
#   }
# }
