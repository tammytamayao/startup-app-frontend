import Link from "next/link";
import logo from "../../../public/vercel.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-primary text-white py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
          <nav>
            <ul className="flex space-x-2">
              <li>
                <Link
                  href="#main"
                  className="w-full mb-2 px-4 py-2 bg-primary text-white text-lg rounded hover:bg-accent hover:text-black transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="w-full mb-2 px-4 py-2 bg-primary text-white text-lg rounded hover:bg-accent hover:text-black transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contactus"
                  className="w-full mb-2 px-2 py-2 bg-primary text-white text-lg rounded hover:bg-accent hover:text-black transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-primary text-white text-lg py-4">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} The Ko-Socials. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
