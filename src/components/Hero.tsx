import Image from "next/image";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
};

export default function Hero({data}: Props) {
    const image = data?.heroImage?.fields?.file?.url;
    return (
        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-gray-900">
          {data?.title}
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          {data?.description}
        </p>
        {image && (
          <div className="mt-8 md:mt-12">
            <Image
              src={`https:${image}`}
              alt={data?.title || "Hero image"}
              className="mx-auto rounded-lg shadow-lg"
              width={800}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority
            />
          </div>
        )}
      </div>
    </section>
    );
}