import Image from "next/image";

interface FeatureData {
  icon?: {
    fields?: {
      file?: {
        url?: string;
      };
    };
  };
  title?: string;
  description?: string;
}

interface FeatureProps {
  data: FeatureData;
}

export default function Feature({ data }: FeatureProps) {
  const icon = data.icon?.fields?.file?.url;

  return (
    <div className="text-center p-4 md:p-6 lg:p-8">
      {icon && (
        <div className="flex justify-center mb-4">
          <Image
            src={`https:${icon}`}
            alt="Feature Icon"
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
            width={80}
            height={80}
          />
        </div>
      )}
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-gray-900">
        {data.title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 mt-2 max-w-md mx-auto">
        {data.description}
      </p>
    </div>
  );
}