import { getContentfulClient } from "@/lib/contentful";

export async function getHomePage() {
    const client = getContentfulClient();
    if (!client) {
        return null;
    }

    try {
        const response = await client.getEntries({
            content_type: "page",
            "fields.slug": "home",
            include: 10,
        });
        return response.items[0] ?? null;
    } catch (error) {
        console.error("Failed to fetch home page from Contentful:", error);
        return null;
    }
}