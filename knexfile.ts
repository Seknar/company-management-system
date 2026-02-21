import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: { directory: "./db/migrations" },
    seeds: { directory: "./db/seeds" },
  }
};

export default config;