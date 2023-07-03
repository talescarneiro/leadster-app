"use client";

import React, { useEffect, useState } from 'react';
import { contentCard } from '../constants';
import CategoryContent from './content/CategoryContent';
import CardsContent, { Card } from './content/CardsContent';
import PageContent from './content/PageContent';
import { categoryOptions, optionsSelect } from "@/app/constants"

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSortOption, setSelectedSortOption] = useState<string>(optionsSelect[0].value);
  const [isActiveButtonCategory, setIsActiveButtonCategory] = useState<number | null>(null)

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const filteredCards = selectedCategory ? contentCard.filter((card) => card.category === selectedCategory) : contentCard;

  const totalFilteredCards = filteredCards.length;
  const totalPages = Math.ceil(totalFilteredCards / cardsPerPage);

  //
  let sortedCards = [...filteredCards];

  if (selectedSortOption === 'Data de Publicação') {
    sortedCards.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (selectedSortOption === 'Ordem Alfabética') {
    sortedCards.sort((a, b) => a.title.localeCompare(b.title));
  }

  const currentCards = sortedCards.slice(indexOfFirstCard, Math.min(indexOfLastCard, sortedCards.length));

  const handleSortOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortOption(event.target.value);
  };

  const openModal = (card: Card) => {
    setSelectedCard(card)
    setModalOpen(true)
  }

  const closeModal = () => {
      setModalOpen(false)
      setSelectedCard(null)
  }

  const handleButtonCategoryClick = (index: number) => {
      if (isActiveButtonCategory === index) {
          setIsActiveButtonCategory(null);
          handleSelectCategory(null)
          setCurrentPage(1)
      } else {
          setIsActiveButtonCategory(index);
          handleSelectCategory(categoryOptions[index].value)
          setCurrentPage(1)
      }
  };

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

  return (
    <main className='flex flex-col justify-center my-9 items-center'>
      <div className='w-65-screen flex flex-col justify-center items-center'>
        <CategoryContent handleButtonCategoryClick={handleButtonCategoryClick} isActiveButtonCategory={isActiveButtonCategory} selectedSortOption={selectedSortOption} handleSortOptionChange={handleSortOptionChange} />
        <div className='border m-3 w-full' />
        <CardsContent currentCards={currentCards} openModal={openModal} closeModal={closeModal} modalOpen={modalOpen} selectedCard={selectedCard} />
        <div className='border m-3 w-full' />
        <PageContent totalPages={totalPages} currentPage={currentPage} handleClickPage={handleClickPage} />
      </div>
    </main>
  );
};

export default Content;
