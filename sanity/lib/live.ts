// sanity/lib/live.ts
export const sanityFetch = async (query: string, params = {}) => {
  const { client } = await import("./client")
  return client.fetch(query, params)
}

// Dummy placeholder (so your imports don't break)
export const SanityLive = () => null
