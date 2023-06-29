import Image from "next/image"
import { useState } from "react";
import Modal from "../Modal";

interface Card {
    id: string;
    desc: string;
    src: string;
    thumb: string;
    title: string;
    type: string;
}

interface CardsContentProps {
    currentCards: Card[];
}

const CardsContent: React.FC<CardsContentProps> = ({ currentCards }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const openModal = (card: Card) => {
        setSelectedCard(card)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedCard(null)
    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-wrap justify-between gap-y-6'>
                {currentCards.map((card: Card) => (
                    <div key={card.title} onClick={() => openModal(card)} className='flex flex-col shadow-lg rounded-xl w-[300px] cursor-pointer group'>
                        <div className='object-cover relative'>
                            <Image className='object-cover' src={card.thumb} alt='Card Thumbnail' width="300" height="300" />
                            <div className='absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-50 transition-opacity'></div>
                        </div>
                        <div className='p-5'>
                            <h2 className='font-semibold transition text-black group-hover:text-blue-500'>{card.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && selectedCard && (<Modal card={selectedCard} closeModal={closeModal} />)}
        </div>
    )
}

export default CardsContent