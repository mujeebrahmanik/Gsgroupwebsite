import Counters from "@/components/common/Counters";
import Hero from "@/components/common/Hero";
import AboutSection from "@/components/common/HomePage/AboutSection";
import ExpertiseSection from "@/components/common/HomePage/ExpertiseSection";
import HowWeWorkSection from "@/components/common/HomePage/HowWeWorkSection";
import PartnersMarquee from "@/components/common/Partners-Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <PartnersMarquee/>
    <ExpertiseSection/>
    <AboutSection/>
    <Counters/>
    <HowWeWorkSection/>
    </>
  );
}
