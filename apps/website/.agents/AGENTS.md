# AGENTS.md (Website)

Inherits global policy from [/.agents/AGENTS.md](../../../.agents/AGENTS.md).

## Scope

Applies to everything under `apps/website`.

## Package Role

`website` is the public storefront/content app. It extends `@org/layer-core` and contains website-specific pages, UI, and APIs.

## Local Rules

1. Keep public-facing UX, content pages, and storefront flows in this package.
2. Move only truly shared logic to `layer-core`.
3. Preserve current i18n strategy (`prefix_except_default`) unless explicitly requested.
4. Respect existing route rules and robots/security behavior.
5. Keep Nuxt Content- and SEO-related behavior consistent with existing implementation.

## Commands

From repo root:

- `vp run website#dev`
- `vp run website#build`
- `vp run website#lint:style`
- `vp run website#test`
- `vp run website#test:unit`
- `vp run website#test:nuxt`

## Validation

For changes in this package, run (from project root) at least:

1. `vp check`
2. `vp run website#lint:style`
3. `vp run website#test`

## Avoid

- Pulling CMS/admin concerns into website
- Duplicating layer/shared utilities
- Broad SEO/security changes unless required by task
