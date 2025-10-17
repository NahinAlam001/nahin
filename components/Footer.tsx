export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} Md. Nahin Alam. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS
          </p>
        </div>
      </div>
    </footer>
  );
}
