# AGENTS.md (Layer Core)

Inherits global policy from [/.agents/AGENTS.md](../../../.agents/AGENTS.md).

## Scope

Applies to everything under `layers/layer-core`.

## Package Role

`layer-core` is the shared Nuxt layer consumed by both `cms` and `website` Nuxt apps. Changes here are cross-cutting.

## Local Rules

1. Treat all changes as potentially impacting both apps.
2. Keep shared contracts stable (`shared/types`, runtime config shape, reusable composables/components).
3. Prefer additive, backward-compatible changes unless explicit breaking change is requested.
4. Validate assumptions against both apps when touching layer-level APIs/config.
5. Preserve existing image/runtime/security defaults unless task requires changes.

## Commands

From repo root:

- `vp run layer-core#dev`
- `vp run layer-core#build`
- `vp run layer-core#check` - Runs type-aware linting and formatting checks.
- `vp run layer-core#lint` - Runs type-aware linting by `oxlint`.
- `vp run layer-core#format` - Runs code formatting by `oxfmt`.
- `vp run layer-core#test` - Runs tests.

## Validation

For layer changes, run at least:

2. `vp run layer-core#check`
3. `vp run layer-core#test`
4. Relevant package checks in dependent app(s) when impact is cross-cutting

## Avoid

- Introducing app-specific logic that belongs in `cms` or `website`
- Breaking shared interfaces without explicit task scope
- Unnecessary dependency additions
