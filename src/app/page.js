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
      <HomeHero />
      <DivisionsSection />
      <HomeAboutSection />
      <InnovationSection />
      <HowItStartedSection />
      <HowItsGoingSection />
      <HomePartnershipSection />
      <div className="px-10 md:px-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <ContactUs />
      </div>
    </>
  );
}
