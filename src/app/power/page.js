import Applications from '@/components/Applications'
import HowEnthusiastPowerWork from '@/components/HowEnthusiastPowerWork'
import PartnerSection from '@/components/PartnerSection'
import PowerHero from '@/components/PowerHero'
import TechnologySection from '@/components/TechnologySection'
import React from 'react'
const EnthusiastPower = () => {
  return (
    <div>
        <PowerHero />
        <TechnologySection />
        <HowEnthusiastPowerWork />
        <Applications />
        <PartnerSection />
    </div>
  )
}

export default EnthusiastPower