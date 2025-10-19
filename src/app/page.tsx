import React from 'react'
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import PricingPlans from '../components/PricingPlan';
import ServicesShowcase from '../components/ServicesShowcase';
import WhyRegistrationMatters from '../components/WhyRegistrationMatters';

const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <PricingPlans />
      <ServicesShowcase />
      <WhyRegistrationMatters />
    </div>
  )
}

export default page
