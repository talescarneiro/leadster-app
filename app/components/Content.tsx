"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { optionsSelect, buttonOptionsNav, contentLinks } from '../constants'
import Button from './Button';


const Content = () => {
  const [isActiveButton, setIsActiveButton] = useState<number | null>(null)

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

  const handleButtonClick = (index: number) => {
    if (isActiveButton === index) {
      setIsActiveButton(null);
    } else {
      setIsActiveButton(index);
    }
  };


  return (
    <main className='flex flex-col justify-center m-9 items-center'>
        {/*  NAV CONTENT  */}
        <div className="flex justify-evenly flex-wrap lg:flex-no-wrap lg:gap-[100px] md:gap-8 sm:gap-7 xs:gap-5">
            <div className="flex flex-wrap lg:flex-no-wrap gap-3">
                {buttonOptionsNav.map((button, index) => (
                    <Button key={button.label} label={button.label} onClick={() => handleButtonClick(index)} isActive={isActiveButton === index} />
                ))}
            </div>
            <div className="lg:mt-0 flex items-center gap-3 text-sm">
                <p className='text-[12px] font-semibold'>Ordenar por: </p>
                <select className='rounded-lg border py-1 px-2 text-[12px]'>
                    {optionsSelect.map((select) => (
                        <option>{select.label}</option>
                    ))}
                </select>
            </div>
        </div>


        <div className='border m-3 w-80-screen' />


        {/*  CARDS CONTENT  */}
        <div className='flex flex-col items-center justify-center mx-[130px]'>
            <div className='flex flex-wrap justify-center gap-6'>
                {currentCards.map((card) => (
                    <div className='flex flex-col shadow-lg rounded-xl w-[300px]'>
                        <div className='object-cover'>
                            <Image className='object-cover' src={card.thumb} alt='Card Thumbnail' width="300" height="300" />
                        </div>
                        <div className='p-5'>
                            <h2 className='font-semibold'>{card.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='border m-3 w-80-screen' />

        <div className='flex gap-3 items-center'>
            <h3 className='font-semibold'>Página</h3>
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index + 1}
                    className={`px-3 py-1 rounded-md border ${
                        currentPage === index + 1 ? 'border-blue-500 text-blue-500 font-semibold' : 'border-none'
                    }`}
                    onClick={() => handleClickPage(index + 1)}
                    >
                    {index + 1}
                </button>
            ))}
        </div>
    </main>
  )
}

export default Content