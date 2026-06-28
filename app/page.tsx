import Image from "next/image";
import { merriweather } from "./layout";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] md:min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">

      {/* Fixed: <div> instead of <h1> wrapping an image */}
      <div className="mb-6">
        <Image
          src="https://ik.imagekit.io/mp1ywtoyn/IMG-20251118-WA0121~3.jpg"
          alt="Divyansh Singh"
          width={180}
          height={180}
          // Responsive sizing: smaller on phones, full size on md+
          className="rounded-full object-cover w-28 h-28 sm:w-36 sm:h-36 md:w-[180px] md:h-[180px] shadow-sm"
          // Tells Next.js which image size to actually download per breakpoint
          sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 180px"
          priority
        />
      </div>

      {/* Proper h1 with responsive text */}
      <h1 className={`${merriweather.className} text-2xl sm:text-3xl font-bold mb-3`}>
        Divyansh Singh
      </h1>

      <p className={`${merriweather.className} text-base sm:text-lg max-w-xl mt-2 leading-relaxed text-gray-600`}>
        I am Divyansh 🙋 &mdash; a computer science student based in New Delhi, India.
      </p>

      {/* Fixed: mailto: and tel: make these one-tap on mobile */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm sm:text-base">
        <a
          href="mailto:dvnsh.work@gmail.com"
          className="hover:underline"
        >
          ✉️ dvnsh.work@gmail.com
        </a>
        
        <a
          href="tel:+916378918236"
          className="hover:underline"
        >
          📞 +91 6378918236
        </a>
      </div>

    </div>
  );
}