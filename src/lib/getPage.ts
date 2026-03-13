import { client } from "@/lib/contentful";
import type { CardComponent, GroupedComponent } from "@/types/contentful";

export async function getHomePage() {
  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 10,
  });

  if (!response.items[0]) {
    throw new Error("Home page not found");
  }

  return response.items[0];
}

export function groupComponents(components: CardComponent[]): GroupedComponent[] {
  const groupedComponents: GroupedComponent[] = [];
  let cardGroup: CardComponent[] = [];

  components?.forEach((component: CardComponent) => {
    const componentType = component.sys.contentType.sys.id;

    if (componentType === "card") {
      cardGroup.push(component);
    } else {
      if (cardGroup.length > 0) {
        groupedComponents.push({ type: "cards", items: cardGroup });
        cardGroup = [];
      }
      groupedComponents.push({ type: componentType, item: component });
    }
  });

  if (cardGroup.length > 0) {
    groupedComponents.push({ type: "cards", items: cardGroup });
  }

  return groupedComponents;
}