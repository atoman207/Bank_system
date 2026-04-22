import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCta } from "@/components/layout/StickyCta";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Service } from "@/components/sections/Service";
import { Reasons } from "@/components/sections/Reasons";
import { Works } from "@/components/sections/Works";
import { Voice } from "@/components/sections/Voice";
import { Areas } from "@/components/sections/Areas";
import { FAQ } from "@/components/sections/FAQ";
import { Message } from "@/components/sections/Message";
import { Company } from "@/components/sections/Company";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="content" className="pb-24 lg:pb-0">
        <Hero />
        <Stats />
        <Service />
        <Reasons />
        <Works />
        <Voice />
        <Areas />
        <FAQ />
        <Message />
        <Company />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
