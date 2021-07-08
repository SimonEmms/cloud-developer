export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME, //"udagramemmsdev",
    "password": process.env.POSTGRES_PASSWORD, //"w3rmyJAG",
    "database": process.env.POSTGRES_DATABASE, //"udagramemmsdev",
    "host": process.env.POSTGRES_HOST, //"udagramemmsdev.ciyaqehxta3o.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION, //"us-east-2",
    "aws_profile": process.env.AWS_PROFILE, //"default",
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET //"udagram-emms-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
