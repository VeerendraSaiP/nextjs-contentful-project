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

export default function Card({data}: CardProps) {
    const image =data.image?.fields?.file?.url;
    return (
        <div className="bborder rounded-lg p-6">
            {image && (
                <Image
                    src={`https:${image}`}
                    alt={data.title || "Card image"}    
                    className="mb-4 rounded"
                    width={400}
                    height={200}    
                />
            )}
            <h2 className="text-lg font-bold mb-2">{data.title}</h2>
            <p className="text-gray-600 mt-2">{data.description}</p>
        </div>    
    )
}