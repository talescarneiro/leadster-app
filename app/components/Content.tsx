"use client";

import React, { useEffect, useState } from 'react';
import { contentCard } from '../constants';
import CategoryContent from './content/CategoryContent';
import CardsContent from './content/CardsContent';
import PageContent from './content/PageContent';

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filteredCards = selectedCategory
    ? contentCard.filter((card) => card.category === selectedCategory)
    : contentCard;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 956) {
        setCardsPerPage(3);
      } else {
        setCardsPerPage(9);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const totalFilteredCards = filteredCards.length;
  const totalPages = Math.ceil(totalFilteredCards / cardsPerPage);

  return (
    <main className='flex flex-col justify-center my-9 items-center'>
      <div className='w-65-screen flex flex-col justify-center items-center'>
        <CategoryContent onSelectCategory={handleSelectCategory} />
        <div className='border m-3 w-full' />
        <CardsContent currentCards={currentCards} />
        <div className='border m-3 w-full' />
        <PageContent totalPages={totalPages} currentPage={currentPage} handleClickPage={handleClickPage} />
      </div>
    </main>
  );
};

export default Content;
