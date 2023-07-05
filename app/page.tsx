'use client';

import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroFooter from "./components/HeroFooter";
import { Card } from "./components/content/CardsContent";
import { contentCard } from "./constants";

export default function Home() {
  const [currentCards, setCurrentCards] = useState<Card[]>(contentCard || [])

  return (
    <>
      <Header />
      <Hero />
      <Content currentCards={currentCards} setCurrentCards={setCurrentCards}/>
      <HeroFooter />
      <Footer />
    </>
  )
}
