'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CategoryContent from './content/CategoryContent';
import CardsContent, { Card } from './content/CardsContent';
import PageContent from './content/PageContent';

import { contentCard, optionsSelect } from "../constants"

interface ContentProps {
  currentCards: Card[];
  setCurrentCards: Dispatch<SetStateAction<Card[]>>;
}

const Content: React.FC<ContentProps> = ({ currentCards, setCurrentCards }) => {
  const [selectedSortOption, setSelectedSortOption] = useState<string>(optionsSelect[0].value);
  const [isActiveButtonCategory, setIsActiveButtonCategory] = useState<number | null>(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [cardsPerPage, setCardsPerPage] = useState<number>(9)

  const pages = Math.ceil(currentCards.length / cardsPerPage)
  const lastIndex = currentPage * cardsPerPage
  const firstIndex = lastIndex - cardsPerPage
  const currentCardsPage = currentCards.slice(firstIndex, lastIndex)

  useEffect(() => {
    const resizeResolution = () => {
      if (window.innerWidth > 1880) {
        setCardsPerPage(12)
      }

      if (window.innerWidth < 1410) {
        setCardsPerPage(4)
      }
    }

    resizeResolution()

    window.addEventListener('resize', resizeResolution)

    return () => {
      window.removeEventListener('resize', resizeResolution)
    }
  }, [cardsPerPage])

  const openModal = (card: Card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCard(null);
  };

  const handleButtonCategoryClick = (index: number, category: string) => {
    if (isActiveButtonCategory === index) {
      setIsActiveButtonCategory(null);
      setCurrentPage(1)
      setCurrentCards(contentCard);
    } else {
      setIsActiveButtonCategory(index);
      setCurrentPage(1)
      setCurrentCards(() => {
        const filteredCardCategory = contentCard.filter((card: Card) => card.category === category);
        return filteredCardCategory;
      });
    }
  };

  const handleSortOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortOption(event.target.value)
    setCurrentPage(1)
    if (event.target.value === 'Ordem Alfabética') {
      setCurrentCards((prevCards: Card[]) => {
        const sortedCards = [...prevCards].sort((a: Card, b: Card) => a.title.localeCompare(b.title))
        return sortedCards
      })
    }

    if (event.target.value === 'Data de Publicação') {
      setCurrentCards((prevCards: Card[]) => {
        const sortedCards = [...prevCards].sort((a: Card, b: Card) => new Date(b.date).getTime() - new Date(a.date).getTime())
        return sortedCards
      })
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className='flex flex-col justify-center my-9 items-center'>
      <div className='w-65-screen flex flex-col justify-center items-center'>
        <CategoryContent handleButtonCategoryClick={handleButtonCategoryClick} isActiveButtonCategory={isActiveButtonCategory} selectedSortOption={selectedSortOption} handleSortOptionChange={handleSortOptionChange} />
        <div className='border m-3 w-full' />
        <CardsContent currentCards={currentCardsPage} openModal={openModal} closeModal={closeModal} modalOpen={modalOpen} selectedCard={selectedCard} />
        <div className='border m-3 w-full' />
        <PageContent pages={pages} currentPage={currentPage} setCurrentPage={handlePageChange} />
      </div>
    </main>
  );
};

export default Content;
