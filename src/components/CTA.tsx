interface CTAData {
    title?: string;
    description?: string;
    buttonLink?: string;
    buttonText?: string;
}

interface CTAProps {
    data: CTAData;
}

export default function CTA({ data }: CTAProps) {
    return (
        <section className="text-center py-16 bg-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-4">{data?.title}</h2>
            {/* <p className="mb-8">{data?.description}</p> */}
            <a
                href={data?.buttonLink}
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full transition-colors hover:bg-gray-200"
            >
                {data?.buttonText}
            </a>
        </section>
    )
}