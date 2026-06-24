import Image from "next/image";
import { merriweather } from "./layout";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="mb-8">
        <Image 
          src="https://ik.imagekit.io/mp1ywtoyn/IMG-20251118-WA0121~3.jpg"
          alt="Divyansh Singh"
          width={180}
          height={180}
          className="rounded-full object-cover w-[180px] h-[180px] shadow-sm"
          priority
        />
      </h1>
      <p className={`${merriweather.className} text-lg max-w-2xl mt-4`}>
        I am Divyansh 🙋 . <br/>
        I am a computer science student based in New Delhi, India.
        <br/> 
        ✉️ dvnsh.work@gmail.com
        <br/>
        📞 +91 6378918236
     </p>
    </div>
  );
}
