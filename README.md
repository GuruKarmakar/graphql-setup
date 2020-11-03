# graphql-setup

1. npm install
2. Create a file called nodemon.json in your root directory.
3. Configure the ENV_VERS

example: 
nodemon.json

```yaml
{
  "env": {
    "MONGO_USER": "testuser",
    "MONGO_PASS": "123456",
    "DB_NAME": "graphqldb"
  }
}
