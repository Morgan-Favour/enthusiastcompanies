import HomeHero from "@/components/HomeHero";
import HomeAboutSection from "@/components/HomeAboutSection";
import DivisionsSection from "@/components/DivisionsSection";
import InnovationSection from "@/components/InnovationSection";
import HowItStartedSection from "@/components/HowItStartedSection";
import HowItsGoingSection from "@/components/HowItsGoingSection";
import HomePartnershipSection from "@/components/HomePatnershipSection";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <HomeHero />
      <DivisionsSection />
      <HomeAboutSection />
      <InnovationSection />
      <HowItStartedSection />
      <HowItsGoingSection />
      <HomePartnershipSection />
      <div className="px-10 md:px-20 bg-gradient-to-b from-[var(--color-eh-power-black)] via-black to-[#1a1a1a]">
        <ContactUs themeColor='eh-power-red' btnColor='eh-power-red' textColor='eh-white' />
      </div>
    </div>
    </>
  );
}
