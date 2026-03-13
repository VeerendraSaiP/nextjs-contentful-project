import {client } from "@/lib/contentful"

export async function getPage(slug:string, contentType: string){
    const response = await client.getEntries({
        content_type: contentType,
        "fields.slug": slug,
        include:10, 
    });
    return response.items[0];
}