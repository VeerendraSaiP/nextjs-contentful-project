import Image from "next/image";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
};

export default function Hero({data}: Props) {
    const image = data?.heroImage?.fields?.file?.url;
    return (
        <section className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">{data?.title}</h1>
            <p className="mt-4 text-gray-600">{data?.description}</p>
            {image && (
                <Image
                    src={`https:${image}`}
                    alt={data?.title || "Hero image"}
                    className="mx-auto"
                    width={800}
                    height={400}
                    style={{ objectFit: "cover" }}
                />
            )}
        </section>
    );
}