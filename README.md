This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the packages:

```bash
npm install
```

Secondly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Changing the env

Please change the .env project for each project according to the Keycloak and Supabase configuration.

```dosini
DEVSTREAM_ID_REALM_ID={{keycloak_realm_id}}
DEVSTREAM_ID_CLIENT_ID={{keycloak_client_id}}
DEVSTREAM_ID_SECRET={{keycloak_client_secret}}
DEVSTREAM_ID_URL={{keycloak_base_url}}
NEXT_PUBLIC_DEVSTREAM_API_URL={{DEVSTREAM_API_URL}}
NEXT_PUBLIC_DEVSTREAM_API_ANON_KEY={{DEVSTREAM_API_ANON_KEY}}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Supabase Documentation](https://supabase.com/docs) - learn about Supabase and its features.
- [Keycloak Documentation](https://www.keycloak.org/guides#getting-started) - Keycloak Documentation.
- [Vuexy Full Version Demo](https://demos.pixinvent.com/vuexy-nextjs-admin-template/demo-1/en/dashboards/crm) - Full Version Demo of Vuexy (Our Template!)
