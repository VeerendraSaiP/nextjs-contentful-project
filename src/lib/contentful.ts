import { createClient } from "contentful";

let cachedClient: ReturnType<typeof createClient> | null | undefined;

export function getContentfulClient() {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!space || !accessToken) {
    console.warn(
      "Contentful environment variables are missing. Set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN."
    );
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient({ space, accessToken });
  return cachedClient;
}