import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Service } from "@/components/sections/Service";
import { Voice } from "@/components/sections/Voice";
import { FAQ } from "@/components/sections/FAQ";
import { Message } from "@/components/sections/Message";
import { Company } from "@/components/sections/Company";
import { Contact } from "@/components/sections/Contact";

/** Single-page layout mirroring https://i-m-service.com/ section order. */
export default function Home() {
  return (
    <>
      {/* One viewport: masthead + MV (hero fills space below header) */}
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <Hero />
      </div>
      <main id="content">
        <Service />
        <Voice />
        <FAQ />
        <Message />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
