import Hero from "@/components/hero";
import TrustData from "@/components/trust-data";
import Problem from "@/components/problem";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import EvidenceDemo from "@/components/evidence-demo";
import ResponsibleAI from "@/components/responsible-ai";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <main className="bg-[#f4f4f4] min-h-screen overflow-x-hidden relative">
      <AnimatedBackground />
      <Hero />
      <TrustData />
      <Problem />
      <HowItWorks />
      <Features />
      <EvidenceDemo />
      <ResponsibleAI />
      <CTA />
      <Footer />
    </main>
  );
}
