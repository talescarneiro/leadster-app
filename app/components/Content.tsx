"use client";

import React, { useEffect, useState } from 'react'
import { contentLinks } from '../constants'
import NavContent from './content/NavContent';
import CardsContent from './content/CardsContent';
import PageContent from './content/PageContent';

const Content = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9)

  const totalPages = Math.ceil(contentLinks.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = contentLinks.slice(indexOfFirstCard, indexOfLastCard)

  const handleClickPage = (page: any) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 956) {
            setCardsPerPage(3)
        } else {
            setCardsPerPage(9)
        }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className='flex flex-col justify-center m-9 items-center'>
        <NavContent />
        <div className='border m-3 w-65-screen' />
        <CardsContent currentCards={currentCards} />
        <div className='border m-3 w-65-screen' />
        <PageContent totalPages={totalPages} currentPage={currentPage} handleClickPage={handleClickPage} />         
    </main>
  )
}

export default Content