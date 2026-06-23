# Next.js Enterprise Boilerplate

A highly opinionated, strictly typed, and heavily automated Next.js (App Router) starter template designed for modern, scalable web development. It emphasizes code quality, automated testing, design-system integration, and a flawless developer experience.

## Features

- **Framework:** [Next.js](https://nextjs.org/) (App Router) with [React](https://react.dev/)
- **Language:** Strictly typed with [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using native CSS config)
- **Theming:** Custom, zero-dependency, SSR-safe Dark/Light mode context implementation (with FOUC prevention).
- **Environment Safety:** Strict build-time and runtime environment variable validation using [Zod](https://zod.dev/) and `@t3-oss/env-nextjs`.
- **Code Quality & Automation:**
  - **ESLint:** Modern Flat Config (`eslint.config.mjs`) bypassing the Next.js CLI wrapper.
  - **Prettier:** Code formatting with automatic Tailwind class sorting (`prettier-plugin-tailwindcss`).
  - **Husky & Lint-Staged:** Lightning-fast pre-commit hooks to ensure only formatted, linted, and type-checked code is staged.
  - **Commitlint:** Enforces Conventional Commits format (`feat:`, `fix:`, etc.) for a clean git history.
- **Testing:** [Vitest](https://vitest.dev/) and React Testing Library setup with jsdom, optimized for Vite-powered Next.js projects.
- **UI Laboratory:** [Storybook](https://storybook.js.org/) configured for isolated component development.
- **CI/CD:** GitHub Actions pipeline running on Node 22 and `pnpm` v11 to automate linting, type-checking, and testing on every push.

---

## Getting Started

### 1. Clone and Install

Clone the repository to your local machine and install the dependencies. **This project strictly uses `pnpm`.**

```bash
git clone <your-repository-url> my-new-project
cd my-new-project
pnpm install
```

_Note: Running pnpm install will download the exact package versions defined in the pnpm-lock.yaml file, ensuring a stable starting point._

### 2\. Set Up Environment Variables

Copy the example environment file and configure it:

`   cp .env.example .env   `

_(Ensure all variables match the schema defined in env.mjs)_

### 3\. Start the Development Server

`   pnpm dev   `

Navigate to http://localhost:3000 to see your application running.

## Available Scripts

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| pnpm dev           | Starts the Next.js development server             |
| pnpm build         | Validates env vars, type checks, builds for prod  |
| pnpm start         | Starts the production server                      |
| pnpm lint          | Runs ESLint across the src folder                 |
| pnpm type-check    | Runs TypeScript type checking without emitting     |
| pnpm test          | Launches Vitest in watch mode                     |
| pnpm test:run      | Runs all Vitest tests once (CI)                   |
| pnpm test:coverage | Runs tests with v8 code coverage                  |
| pnpm storybook     | Starts Storybook on port 6006                     |

## How to Customize the Boilerplate

### 1\. Modifying the Theme (Dark Mode)

The theming engine is fully custom and lives in src/contexts/ThemeContext.tsx.

- **To change colors:** Open src/app/globals.css. Modify the hex codes in the :root (light mode) and .dark blocks. Tailwind v4 will automatically pick up these changes.
- **To change toggle behavior:** Modify src/components/ThemeChanger.tsx.

### 2\. Adding Environment Variables

Do not just add variables to your .env file! You must also declare them in the schema so TypeScript knows about them.

1.  Open env.mjs in the root directory.
2.  Add your variable to the server or client (prefixed with NEXT_PUBLIC\_) Zod schema.
3.  Map the variable in the runtimeEnv object at the bottom of the file.
4.  Import env from env.mjs anywhere in your app to use it with full autocomplete.

### 3\. Adjusting Code Rules

- **ESLint:** Edit eslint.config.mjs to add or remove JavaScript/TypeScript logic rules.
- **Prettier:** Edit .prettierrc to change tab widths, quotes, or formatting preferences.

### 4\. Git Hooks and Commits

- If you want to change what happens before a commit, edit .husky/pre-commit.
- Remember that commit messages must follow the standard: type: description (e.g., feat: added user login). If your commit fails, check this format!

## How to Update the Dependencies

Because this boilerplate commits the pnpm-lock.yaml file, it guarantees a perfectly stable baseline. However, as the ecosystem evolves (e.g., React 19, Next.js 17), you will eventually want to update the core tools.

### For a Single Project

If you cloned this for a new project and want the absolute latest features before you start coding:

`   pnpm update --latest   `

This forces pnpm to ignore the lockfile, fetch the newest versions of everything, and generate a new lockfile snapshot.

### Maintaining the Core Boilerplate

To keep the main boilerplate repository up to date over time:

1.  Every 3-6 months, pull down your boilerplate repository.
2.  Run pnpm update --latest.
3.  Run pnpm test:run and pnpm lint to verify that no major framework updates broke your configuration.
4.  Commit the updated package.json and pnpm-lock.yaml using: git commit -m "chore: updated dependencies to latest versions".
5.  Push to GitHub.
