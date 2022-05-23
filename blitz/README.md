# Directus Blitz Example

This is a [Blitz](https://blitzjs.com) project bootstrapped with [`blitz cli`](https://github.com/blitz-js/blitz/tree/canary/packages/cli).

## 📌 Prerequisites

You will need to have the provided [Directus project](../directus) running first before proceeding with this example.

## 🚀 Getting Started

1. Clone this repo.

2. Install dependencies for this example.

   ```shell
   cd blitz
   npm install
   ```

3. Create a `.env` file by copying the provided `.env.example` file.

4. Start the development server.

   ```shell
   npm run dev
   ```

   Your Directus Blitz example is now running at <http://localhost:3000>.

## Aside

Usually a blitz project will live on its own and have a dedicated `.git`
directory, not in a sub-directory as this example. Because of that the `prepare`
script, which runs after `npm install`, is "disabled", since `husky` will try to
setup its git hooks.

## 🔗 Links

### Directus

- [Official Site](https://directus.io)
- [Documentation](https://docs.directus.io)

### Blitz

- [Official Site](https://blitzjs.com)
- [Documentation](https://blitzjs.com/docs)
