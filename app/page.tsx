import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Brain, Globe } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
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

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Luminary AI Interface
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card">
              <MessageSquare className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">
                Natural Conversations
              </h3>
              <p className="text-muted-foreground">
                Experience fluid, context-aware dialogues that adapt to your
                emotional state.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <Brain className="h-12 w-12 mb-4 text-violet-500" />
              <h3 className="text-xl font-semibold mb-2">
                Emotional Intelligence
              </h3>
              <p className="text-muted-foreground">
                Advanced emotion recognition for more meaningful interactions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <Globe className="h-12 w-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">
                Next.js Integration
              </h3>
              <p className="text-muted-foreground">
                Built with modern web technologies for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Development Roadmap
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="w-24 font-bold text-blue-500">Q2 2025</div>
              <div className="flex-1 pb-8 border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Launch Phase</h3>
                <p className="text-muted-foreground">
                  Initial release with core Luminary features and emotion
                  recognition.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-bold text-violet-500">Q3 2025</div>
              <div className="flex-1 pb-8 border-l-2 border-violet-500 pl-4">
                <h3 className="font-semibold mb-2">Enhanced Analysis</h3>
                <p className="text-muted-foreground">
                  Advanced emotion patterns and improved response accuracy.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 font-bold text-green-500">Q4 2025</div>
              <div className="flex-1 pb-8 border-l-2 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">Multi-modal Integration</h3>
                <p className="text-muted-foreground">
                  Support for voice, text, and visual emotional cues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Luminary?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing human-AI interaction with emotion-aware
            conversations.
          </p>
          <Link href="/chat">
            <Button size="lg" className="font-medium">
              Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
