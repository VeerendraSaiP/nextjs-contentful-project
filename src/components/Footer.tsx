type FooterProps = {
    data: {
        footerText: string;
        copyrightText: string;
    };
};

export default function Footer({data}: FooterProps) {
    return (
        <footer className="text-center py-6 bg-gray-900 text-white">
            <p className="text-lg font-semibold">{data.footerText}</p>
            
            <p className="text-xs mt-4">&copy; {data.copyrightText} </p>
        </footer>
    );
}