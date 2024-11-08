import Image from "next/image";
import banner from "@/assets/banner.jpg"
export default function Home() {
  return (
   <main className="max-auto w-7xl mx-auto px-5 py-10 space-y-10">
  <div className="flex items-center bg-secondary md:h-96">
  <div className="space-y-7 p-10 text-center md:w-1/2"></div>
  <div className="hidden h-full w-1/2 md:block">
  <Image
  src={banner}
  alt="Flow Shop banner"
  className="h-full object-cover"
  />
  </div>
  </div>
</main>
  );
}
