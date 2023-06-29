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
    window.scrollTo({ top: 500, behavior: 'smooth' })
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
    <main className='flex flex-col justify-center my-9 items-center'>
        <div className='w-65-screen flex flex-col justify-center items-center'>
            <NavContent />
            <div className='border m-3 w-full' />
            <CardsContent currentCards={currentCards} />
            <div className='border m-3 w-full' />
            <PageContent totalPages={totalPages} currentPage={currentPage} handleClickPage={handleClickPage} />         
        </div>
    </main>
  )
}

export default Content