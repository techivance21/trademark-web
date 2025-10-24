import React from 'react'
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import PricingPlans from '../components/PricingPlan';
import ServicesShowcase from '../components/ServicesShowcase';
import Testimonials from '../components/Testimonials';
import WhyRegistrationMatters from '../components/WhyRegistrationMatters';
import FAQ from '../components/FAQ';

const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <PricingPlans />
      <ServicesShowcase />
      <WhyRegistrationMatters />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default page
