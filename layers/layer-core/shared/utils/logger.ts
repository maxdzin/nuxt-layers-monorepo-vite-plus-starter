import type { ConsolaInstance } from 'consola'
import { consola } from 'consola'

export function useLogger(tag?: string): ConsolaInstance {
  const logger = tag ? consola.withTag(tag) : consola
  const config = useRuntimeConfig()

  if (
    import.meta.dev &&
    config.public.app.env !== 'production' &&
    config.public.logger?.level
  ) {
    logger.level = config.public.logger.level
  }

  return logger
}
