import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cats]
  }

  type Cats {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cats!
  }
`;
