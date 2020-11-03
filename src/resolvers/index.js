import { Cat } from "../modal/Cat";

export const resolvers = {
  Query: {
    hello: () => "Hello World!",
    cats: () => Cat.find(),
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
  },
};
