'use client'

import CarouselComponent from '@/components/CarouselComponent';
import NavbarComponent from '@/components/NavbarComponent';
import AboutComponent from '@/sections/about/AboutComponent';
import ContactComponent from '@/sections/contact/ContactComponent';
import DataComponent from '@/sections/data/DataComponent';
import FooterComponent from '@/sections/footer/FooterComponent';
import ServiceComponent from '@/sections/service/ServiceComponent';
import HomeComponent from '@/sections/home/HomeComponent';
import BrandComponent from '@/sections/brands/BrandComponent';


export default function Home() {
  return (
    <div>
      <NavbarComponent />

      <HomeComponent />

      <AboutComponent />

      <ServiceComponent />

      <BrandComponent />

      <ContactComponent />

      <DataComponent />

      <FooterComponent />
    </div>
  
  )
}
