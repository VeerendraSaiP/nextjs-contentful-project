import Image from "next/image";

interface CardData {
  image?: {
    fields?: {
      file?: {
        url?: string;
      };
    };
  };
  title?: string;
  description?: string;
}

interface CardProps {
  data: CardData;
}

export default function Card({ data }: CardProps) {
  const image = data.image?.fields?.file?.url;
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
      {image && (
        <div className="relative w-full h-48 md:h-56 lg:h-64 mb-4">
          <Image
            src={`https:${image}`}
            alt={data.title || "Card image"}
            className="rounded object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-gray-900">
        {data.title}
      </h2>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        {data.description}
      </p>
    </div>
  );
}