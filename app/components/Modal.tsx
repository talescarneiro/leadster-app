import React, { useEffect, useRef } from 'react';

const Modal = ({ card, closeModal }: any) => {
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
                src="https://www.youtube.com/embed/yju8RTdhHQ0"
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
                <div>
                    <h2 className='text-sm font-semibold mt-3'>Downloads</h2>
                </div>
                <div className='w-full border' />
            </div>
        </div>
    </div>
  );
};

export default Modal;