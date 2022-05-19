/** 🌹oddFEELING */

import Head from 'next/head';
import AOS from 'aos';
import { useEffect } from 'react';
import * as S from '../styles/Home.component';
import HomeHero from '../components/home/hero/HomeHero';
import TopSection from '../components/home/top_section/TopSection';
import Equip from '../components/home/equip_section/Equip';
import Facility from '../components/home/facility_section/Facility';
import Offer from '../components/home/offer_section/Offer';
import Testimony from '../components/home/testimony_section/Testimony';
import Register from '../components/home/register/Register';

//=============================================>  COMPONENT
export default function Home() {
  // ======= effect to initialize libs -->
  useEffect(() => {
    AOS.init({
      delay: 0,
      once: true,
      offset: 50,
      duration: 800,
      disable: 'phone',
    });
  });
  return (
    <S.Container>
      <Head>
        <title>UBS | Home</title>
        <meta name='description' content='Unique Blossom official site' />
        <link rel='icon' href='/logo.jpg' />
      </Head>

      <HomeHero />
      <TopSection />
      <Equip />
      <Facility />
      <Offer />
      <Testimony />
      <Register />
    </S.Container>
  );
}