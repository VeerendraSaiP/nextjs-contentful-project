import {getHomePage } from "@/lib/getPage"
import Hero from "@/components/Hero"
import Feature from "@/components/Feature"
import Card from "@/components/Card"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default async function Home() {
  const pageData = await getHomePage();
  const components = pageData.fields.components;
  return (
    <main>
      {Array.isArray(components) &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
        components.map((component: any) => {
          const componentType = component.sys.contentType.sys.id;
          switch (componentType) {
            case "hero":
              return <Hero key={component.sys.id} data={component.fields} />;
            case "feature":
              return <Feature key={component.sys.id} data={component.fields} />;
            case "card":
              return <Card key={component.sys.id} data={component.fields} />;
            case "cta":
              return <CTA key={component.sys.id} data={component.fields} />;
            case "footer":
              return <Footer key={component.sys.id} data={component.fields} />;
            default:
              return null;
          }
        })}
    </main>
  );
}