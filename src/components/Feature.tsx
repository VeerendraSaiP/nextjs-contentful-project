import Image from 'next/image';

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
	const icon =data.icon?.fields?.file?.url;

    return (
            
        <div className="text-center p-6">
            {icon && (
                <Image
                    src={`https:${icon}`}
                    alt="Feature Icon"
                    className="mx-auto w-12"
                    width={64}
                    height={64}
                />
            )}
            <h3 className="text-xl font-semibold mt-4">{data.title}</h3>
            <p className="text-gray-600 mt-2">{data.description}</p>
        </div>
    );
}