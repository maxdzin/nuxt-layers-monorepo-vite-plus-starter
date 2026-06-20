# AGENTS.md

## Purpose

This file guides coding agents working in the `org` monorepo. Keep changes minimal, scoped, and aligned with existing project patterns.

## Stack & scope

- Monorepo: [`pnpm`](https://pnpm.io) workspaces.
- Unified toolchain: [`vite-plus`](https://viteplus.dev/guide) - combines `vite`, `vitest`, `oxlint`, `oxfmt`, `rolldown`, `tsdown` and `vite-task`.
- Runtime: Node LTS (`>=24.*.*`) - provided by `vite-plus`.
- Framework: Nuxt v4 (with version 5 compatibility)
- UI: Nuxt UI based on latest Tailwind
- Apps/layers/packages:
  - `/apps/cms` - Nuxt app for content management.
  - `/apps/website` - Nuxt app for public storefront.
  - `/layers/layer-core` - Shared Nuxt layer used by both apps.
  - `/packages/tooling` - Package that provides shared configs for tools.

## Architecture rules

1. Both `cms` and `website` extend `@org/layer-core`.
2. Put reusable domain logic in `/layers/layer-core` first when applicable.
3. Keep app-specific UI/routes/API code in the corresponding app package.
4. Avoid duplicating shared types/utilities across apps—prefer `/layers/layer-core/shared` or package-local shared folders.
5. Preserve existing SSR mode and route/security behavior unless a task explicitly asks to change it.

## Working directories

- Root orchestration: repository root
- Package-local work: run commands from the specific package directory or via root filters

Useful root shortcuts:

- `vp check` - Runs format, lint and type checks together across the monorepo.
- `vp format` - Runs formatting (by `oxfmt`) across all packages.
- `vp lint` - Runs type aware linting (lint + type checks by `oxlint`) across all packages.
- `vp run lint:style` - Runs stylelint across all packages (since stylelint is out of scope of `oxlint`).
- `vp test` - Runs all tests across all packages.
- `vp run <package>#<script>` - Runs a specific script in a package, e.g. `vp run cms#dev` to start the CMS dev server.
- `vp run cms#<script>`
- `vp run website#<script>`
- `vp run layer-core#<script>`

## Common commands

From repo root:

- Install deps: `vp install -r`
- Complete codebase check: `vp check`
- Type-aware lint: `vp lint`
- Format: `vp format`
- Test apps: `vp test`

Per package examples:

- CMS dev: `vp run cms#dev`
- Website dev: `vp run website#dev`
- Layer playground dev: `vp run layer-core#dev`
- CMS unit tests: `vp run cms#test:unit`
- Website nuxt tests: `vp run website#test:nuxt`
- Layer tests: `vp run layer-core#test`

> Note: Vite+ is still under development and currently does not fully support the Nuxt framework, so for now, some commands (such as `vite dev ... `) must be run differently than specified in the documentation [here](https://viteplus.dev/guide/monorepo#app-commands), since that runs the development server on Vite’s default port 5173, whereas Nuxt apps expect it to be 3000. Therefore, for Nuxt apps, use the commands listed above.

## Editing guidelines

1. Follow existing style and naming patterns in touched files.
2. Make focused edits; do not refactor unrelated areas.
3. Do not add dependencies unless required by the task.
4. Do not modify lockfiles unless dependency changes are requested.
5. Prefer typed utilities/composables over ad-hoc inline logic.
6. Keep public APIs and shared contracts backward compatible unless requested otherwise.

## Validation strategy

Run the smallest relevant checks first, then broaden:

1. Targeted tests for changed module/package.
2. Package-level lint/typecheck.
3. Monorepo-wide checks only when change affects shared or cross-package behavior.

Minimum expectation after code changes:

- Run lint/typecheck for affected package.
- Run the most relevant tests for touched functionality.

## Nuxt-specific notes

- Respect each package's `nuxt.config.ts` module list and runtime config shape.
- Keep `i18n` usage consistent with each app strategy (`cms` and `website` differ).
- For shared image/storage/runtime behavior, prefer changes in `layer-core` to keep both apps aligned.
- Avoid changing `compatibilityDate`, `future.compatibilityVersion`, or security headers unless requested, but propose changes if improvements are identified during analysis or review.
- For `cms` Nuxt app server API routes, make sure to validate auth and admin access.
- For all Nuxt apps server API routes, make sure to validate request data (parameters, queries, body, etc.) by relevant zod schemas.

## Non-goals (unless explicitly requested)

- Large-scale folder reorganizations
- Broad visual redesigns
- Upgrading major framework/tooling versions
- Changing CI, release, or Git workflow behavior

## Handoff checklist

When finishing a task, provide:

1. Files changed and why
2. Commands/tests run and outcomes
3. Any risks, assumptions, or follow-up actions

## Useful links

- [Vite+ (vite plus) documentation](https://viteplus.dev/guide), and, specifically, the [monorepo guide](https://viteplus.dev/guide/monorepo)
- [Vite documentation](https://vitejs.dev/guide/)
- [OXC tools (oxlint and oxfmt) documentation](https://oxc.rs/docs/guide/introduction.html)
- [Vitest documentation](https://vitest.dev/guide/)
- [Nuxt 4 documentation](https://nuxt.com/docs)
- [Vue 3 documentation](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [pnpm documentation](https://pnpm.io)
