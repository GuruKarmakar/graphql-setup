const { MONGO_USER, MONGO_PASS, DB_NAME } = process.env;
export const CONNECTION_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.vmyny.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
