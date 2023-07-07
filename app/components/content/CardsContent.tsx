import React from "react"
import Image from "next/image"
import Modal from "../Modal";

export interface Download {
    id: number;
    name: string;
    type: string;
    src: string;
    color: string;
    primaryColor: string;
    secondaryColor: string;
  }

export interface Card {
    id: string;
    title: string;
    date: string;
    category: string;
    type: string;
    desc: string;
    src: string;
    thumb: string;
    downloads: Download[];
}

interface CardsContentProps {
    currentCards: Card[];
    openModal: (card: Card) => void;
    closeModal: () => void;
    modalOpen: boolean;
    selectedCard: Card | null;
}

const CardsContent: React.FC<CardsContentProps> = ({ currentCards, openModal, modalOpen, selectedCard, closeModal }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap justify-between gap-y-6 gap-2'>
                {currentCards.map((card: Card) => (
                    <div key={card.title} onClick={() => openModal(card)} className='flex flex-col shadow-lg rounded-xl w-[300px] cursor-pointer group'>
                        <div className='object-cover relative'>
                            <Image className='object-cover' src={card.thumb} alt='Card Thumbnail' width="300" height="300" />
                            <div className='absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity'></div>
                        </div>
                        <div className='p-5'>
                            <h2 className='font-bold transition text-graysecondary group-hover:text-blue-500'>{card.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && selectedCard && (<Modal card={selectedCard} closeModal={closeModal} />)}
        </div>
    )
}

export default CardsContent