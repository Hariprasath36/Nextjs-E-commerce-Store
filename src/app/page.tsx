import Image from "next/image";
import banner from "@/assets/banner.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function Home() {
  return (
   <main className="max-auto w-7xl mx-auto px-5 py-10 space-y-10">
  <div className="flex items-center bg-secondary md:h-96">
  <div className="space-y-7 p-10 text-center md:w-1/2">
  <h1 className="text-3xl md:text-4xl font-bold">
    Fill the world in your heart
    </h1>
    <p>
    Tough day? Credit card maxed out? Buy some expensive stuff and
    become happy again!
    </p>
    <Button asChild>
            <Link href="/shop">
              Shop Now <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
    </div>
  <div className="relative hidden h-full w-1/2 md:block">
  <Image
  src={banner}
  alt="Flow Shop banner"
  className="h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-secondary" />
  </div>
  </div>
</main>
  );
}
