import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eulade — Electrical Engineer & Founder" },
      {
        name: "description",
        content:
          "Eulade — Electrical Power Engineer and founder building scalable energy solutions, solar systems and infrastructure for Africa.",
      },
      { property: "og:title", content: "Eulade — Electrical Engineer & Founder" },
      {
        property: "og:description",
        content:
          "Building scalable energy systems, infrastructure and innovative solutions for emerging markets.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
