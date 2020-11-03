import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import { CONNECTION_URI } from "./config/db";

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await mongoose.connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  server.listen().then(({ url }) => console.log(`server started at ${url}`));
};

startServer();
