# AGENTS.md (CMS)

Inherits global policy from [/.agents/AGENTS.md](../../../.agents/AGENTS.md).

## Scope

Applies to everything under `apps/cms`.

## Package Role

`cms` is the admin app. It extends `@org/layer-core` and contains CMS-only pages, components, and server APIs.

## Local Rules

1. Prefer `layer-core` for reusable logic shared with `website`.
2. Keep CMS-only workflows in this package (`app/components`, `app/pages`, `server/api`, CMS composables).
3. Keep auth/admin behavior and dashboard UX scoped to CMS.
4. Preserve `ssr: false` and existing route/security behavior unless explicitly requested.
5. Keep i18n strategy unchanged (`no_prefix`) unless task requires migration.

## Commands

From repo root:

- `vp run cms#dev`
- `vp run cms#build`
- `vp run cms#lint:style`
- `vp run cms#test`
- `vp run cms#test:unit`
- `vp run cms#test:nuxt`

## Validation

For changes in this package, run (from project root) at least:

1. `vp check`
2. `vp run cms#lint:style`
3. `vp run cms#test`

## Avoid

- Duplicating utilities/types already available in `layer-core`
- Cross-package refactors unless requested
- Unrelated visual redesigns
