import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL_UNPOOLED,
  },
});

// Copied from https://neon.com/docs/guides/prisma
