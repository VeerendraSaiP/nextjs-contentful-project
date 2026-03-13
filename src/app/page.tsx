import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { groupComponents } from "@/lib/getPage";
import type { CardComponent } from "@/types/contentful";

async function getHomePageData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/homepage`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch homepage data");
  }

  return res.json();
}

export default async function Home() {
  const pageData = await getHomePageData();
  const components = pageData.fields.components;
  const groupedComponents = groupComponents(components);

  return (
    <main className="min-h-screen bg-gray-50">
      {groupedComponents.map((group, index) => {
        if (group.type === "cards" && "items" in group) {
          return (
            <div key={`cards-${index}`} className="py-8 md:py-12 lg:py-16 px-4">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((card: CardComponent) => (
                  <Card key={card.sys.id} data={card.fields} />
                ))}
              </div>
            </div>
          );
        }

        if ("item" in group) {
          const component = group.item;
          const componentType = group.type;

          switch (componentType) {
            case "hero":
              return <Hero key={component.sys.id} data={component.fields} />;
            case "feature":
              return <Feature key={component.sys.id} data={component.fields} />;
            case "cta":
              return <CTA key={component.sys.id} data={component.fields} />;
            case "footer":
              return (
                <Footer
                  key={component.sys.id}
                  data={{
                    footerText: component.fields.footerText || "",
                    copyrightText: component.fields.copyrightText || "",
                  }}
                />
              );
            default:
              return null;
          }
        }

        return null;
      })}
    </main>
  );
}