import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center h-full pt-40">
        <h1 className="font-playfair text-5xl md:text-7xl text-center font-bold mb-6 max-w-4xl">
          <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Emotional Intelligence
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Redefined
          </span>
        </h1>

        <p className="text-muted-foreground text-center max-w-2xl text-lg mb-12 leading-relaxed">
          Experience the future of human-AI interaction with our emotion-aware
          conversational interface. Connect deeper, understand better.
        </p>

        <div className="flex gap-4">
          <Link href="/chat">
            <Button size="lg" className="font-medium">
              Start Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
