Documenting the database installation/setup commands I used here, 
thought it might be interesting and give an easier view into what I have done.

To install prisma i used:
```bash
npm install @prisma/client @prisma/adapter-neon dotenv
npm install prisma@7 tsx --save-dev
npx prisma init 
```

To generate Prisma client and push to Neon database (these need to be done if and whenever the Prisma schema is changed)
```bash
npx prisma generate
npx prisma db push
```

References:

Primary source for setting up Prisma with Neon database https://neon.com/docs/guides/prisma
`prisma generate` https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/generating-prisma-client
