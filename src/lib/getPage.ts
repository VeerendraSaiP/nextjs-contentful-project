import {client } from "@/lib/contentful"

export async function getHomePage(){
    const response = await client.getEntries({
        content_type: "page",
        "fields.slug": "home",
        include:10, 
    });
    return response.items[0];
}