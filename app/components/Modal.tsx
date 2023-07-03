import React, { useEffect, useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Card, Download } from './content/CardsContent';

interface ModalProps {
  card: Card;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ card, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    closeModal()
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleCloseModal()
      }
    }

    document.body.classList.add('modal-open')
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.body.classList.remove('modal-open')
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [closeModal])

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-25 z-50">
        <div ref={modalRef} className="bg-white rounded-lg flex flex-col lg:max-w-[35%] w-full border-blueprimary border-t-4">
            <div className='w-full h-5 flex justify-end items-center p-4'>
                <button onClick={handleCloseModal}>X</button>
            </div>
            <div className='flex gap-2 items-center justify-center p-4'>
                <p className='text-blue-500 font-semibold'>{card.type}: </p><h2 className="font-semibold">{card.title}</h2>
            </div>
            <div className='w-full'>
                <iframe
                width="100%"
                src={card.src}
                title='Youtube Video'
                allowFullScreen
                style={{ aspectRatio: '16/9' }}
                >
                </iframe>
            </div>

            <div className='p-5 flex flex-col gap-2'>
                <div>
                    <h2 className='text-sm font-semibold'>Descrição</h2>
                </div>
                <div className='w-full border' />
                <div>
                    <p className='text-sm'>{card.desc}</p>
                </div>
                {card.downloads && (
                    <>
                        <div>
                            <h2 className='text-sm font-semibold mt-3'>Downloads</h2>
                        </div>
                        <div className='w-full border' />
                    </>
                )}
                <div className='flex gap-2 text-xs flex-wrap'>
                    {card?.downloads && card?.downloads?.map((download: Download, index: number) => (
                        <a key={index + 1} href={download.src} className='flex items-center' download>
                            <div className='h-full px-2 flex items-center rounded-l-md' style={{ backgroundColor: download.color }}><FiDownload size={14} /></div>
                            <div className='p-1 rounded-r-md font-semibold px-2' style={{ backgroundColor: download.secondaryColor, color: download.color }}>{download.name}.{download.type}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Modal;