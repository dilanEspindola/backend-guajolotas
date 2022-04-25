import { config } from "dotenv";
config();

export const MONGO_DB_URI = process.env.MONGO_DB_URI_PROD;

export const SECRET = process.env.SECRET_KEY;
