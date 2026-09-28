Documenting the database installation/setup commands I used here, 
thought it might be interesting and give an easier view into what I have done.

To install prisma i used:
```bash
npm install @prisma/client @prisma/adapter-neon dotenv
npm install prisma@7 tsx --save-dev
npx prisma init 
```

Create a `.env` file in the top level folder of the repository
```bash
cd $(git rev-parse --show-toplevel)
touch .env
```
Follow the instructions for [step 2](https://neon.com/docs/guides/prisma#step-2-get-your-connection-strings) to get the connection strings from Neon and add them to the `.env` file.
**Do not share or publish the connection strings. Git should not be tracking the `.env` file.**

To generate Prisma client and push to Neon database (these need to be done if and whenever the Prisma schema is changed)
```bash
npx prisma generate
npx prisma db push
```


References:

Primary source for setting up Prisma with Neon database https://neon.com/docs/guides/prisma
`prisma generate` https://www.prisma.io/docs/orm/v7/prisma-client/setup-and-configuration/generating-prisma-client
