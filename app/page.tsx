import "@/src/landing.css";
import {
  Header,
  Hero,
  Services,
  ValueProposition,
  Process,
  Testimonials,
  CTA,
  Footer,
} from "@/src";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <ValueProposition />
      <Process />
      {/*<Testimonials />*/}
      <CTA />
      <Footer />
    </main>
  );
}
