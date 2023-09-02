

# Next 13, TRPC, Drizzle, Next-Auth

### ⚠️ THIS PROJECT IS IN ACTIVE DEVELOPMENT !!

Inspired by [T3 stack](https://create.t3.gg/) and Jack Harrington [video](https://www.youtube.com/watch?v=qCLV0Iaq9zU&t=569s), this is a role-based auth todo app.


## Features

- ``Auth`` - Discord
- ``Roles`` - Admin and User, the admin can delete or update all todos, user can manipulate only his todos.
- ``User and Admin panel`` - each user has dedicated panel with actions

## Tech features
- ``Next.js`` 13 app dir 
- `tRPC` 
- ``Drizzle`` ORM with SQLite 
- ``Next-Auth`` Discord Provider
- ``UI`` Shadcn UI
- ``Roles`` Admin and User

## Try yourself
First, git clone the repository and install dependencies

```bash
npm install
# or
yarn

```

### Setup env

Add .env file to the root of the app, and fill env variables

```bash
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

```

for more details about setting env variables check:

- [Discord oAuth2 docs](https://discord.com/developers/docs/topics/oauth2) 
- [next-auth url ](https://next-auth.js.org/getting-started/example#deploying-to-production)
- [next-auth secret](https://next-auth.js.org/configuration/options#secret) 


### Run the app

Then run the database generation command:

```bash
yarn drizzle-kit generate:sqlite
```

And run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Usage

### Change role

for role change in development env use drizzle studio:

```bash

yarn drizzle-kit studio

```

navigate to provided URL from CLI, select the `user` table on the UI, select the user, and change role to either ADMIN or USER

### Client fetching

```typescript
'use client'

import { trpc } from "@/app/_trpc/client";

function ClientComponent(){

    const { data } = trpc.todo.getUserTodos.useQuery()

    return (
        ...
    )
}
```

### Server fetching

```typescript

import { serverClient } from "@/app/_trpc/serverClient";

async function ServerComponent() {
  const trpcClient = await serverClient();

  const data = await trpcClient.todo.getUserTodos();

return  (
    ...
)
}
```

### Routers

located in `src/server/routers/root.ts` <br/>

``todoRouter`` - used for todo CRUD operations, with middleware protections and payload validation <br/>
``userRouter`` - not used, added just for example <br/>

[more about TRPC routers](https://trpc.io/docs/server/routers)

### Middlewares

located in `src/server/trpc.ts`

``publicProcedure`` - no restriction <br/>
``protectedProcedure``- requires from user to be authenticated <br/>
``protectedAdminProcedure`` - requires from user to be authenticated AND have an admin role <br/>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) 
- [Learn Next.js](https://nextjs.org/learn) 
- [tRPC Documentation](https://trpc.io/docs/)
- [Drizzle Documentation](https://orm.drizzle.team/)
- [Next-Auth Documentation](https://next-auth.js.org/)
- [Shadcn UI](https://ui.shadcn.com/)


## Preview live
Coming soon

## Deploy on Vercel

Coming Soon
