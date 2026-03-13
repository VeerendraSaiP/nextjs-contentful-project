type FooterProps = {
  data: {
    footerText: string;
    copyrightText: string;
  };
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="text-center py-6 md:py-8 lg:py-10 px-4 bg-gray-900 text-white">
      <p className="text-base md:text-lg font-semibold">{data.footerText}</p>
      <p className="text-xs md:text-sm mt-4 text-gray-400">
        &copy; {data.copyrightText}
      </p>
    </footer>
  );
}