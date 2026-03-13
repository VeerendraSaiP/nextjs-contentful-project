import {getPage } from "@/lib/getPage"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Card from "@/components/Card"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import type { CardType, GroupedComponent } from "@/types/contentfulType"

export default async function Home() {
  const pageData = await getPage("home", "page");
  if (!pageData) {
    return (
      <main className="px-4 py-10 md:px-8 lg:px-16">
        <p>Content is currently unavailable. Please check Contentful configuration.</p>
      </main>
    );
  }

  const components = pageData.fields.components;
  
  // Group consecutive cards together
  const groupedComponents: GroupedComponent[] = [];
  let cardGroup: CardType[] = [];
  
  ((Array.isArray(components) ? components : []) as CardType[]).forEach((component: CardType) => {
    const componentType = component.sys.contentType.sys.id;
    if (componentType === "card") {
      cardGroup.push(component);
    } else {
      if (cardGroup.length > 0) {
        groupedComponents.push({ type: 'cardGroup', cards: cardGroup });
        cardGroup = [];
      }
      groupedComponents.push({ type: 'single', component });
    }
  });
  
  // Add remaining cards if any
  if (cardGroup.length > 0) {
    groupedComponents.push({ type: 'cardGroup', cards: cardGroup });
  }
  
  return (
    <main>
      {groupedComponents.map((item, index) => {
        if (item.type === 'cardGroup') {
          return (
            <div key={`card-group-${index}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-16 py-8">
              {item.cards.map((card: CardType) => (
                <Card key={card.sys.id} data={card.fields} />
              ))}
            </div>
          );
        }
        
        const component = item.component;
        const componentType = component.sys.contentType.sys.id;
        
        switch (componentType) {
          case "hero":
            return <Hero key={component.sys.id} data={component.fields} />;
          case "feature":
            return <Feature key={component.sys.id} data={component.fields} />;
          case "cta":
            return <CTA key={component.sys.id} data={component.fields} />;
          case "footer":
            return <Footer key={component.sys.id} data={component.fields as { footerText: string; copyrightText: string }} />;
          default:
            return null;
        }
      })}
    </main>
  );
}