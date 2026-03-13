interface CTAData {
  title?: string;
  buttonLink?: string;
  buttonText?: string;
}

interface CTAProps {
  data: CTAData;
}

export default function CTA({ data }: CTAProps) {
  return (
    <section className="text-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {data?.title}
        </h2>
        <a
          href={data?.buttonLink}
          className="inline-block bg-white text-blue-600 font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full transition-all hover:bg-gray-100 hover:scale-105 shadow-lg"
        >
          {data?.buttonText}
        </a>
      </div>
    </section>
  );
}