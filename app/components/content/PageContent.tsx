import React from 'react';

type ClickPageHandler = (page: number) => void;

interface PageContentProps {
  totalPages: number;
  currentPage: number;
  handleClickPage: ClickPageHandler;
}

const PageContent: React.FC<PageContentProps> = ({ totalPages, currentPage, handleClickPage }) => {
  

  return (
    <div className='flex gap-3 items-center'>
      <h3 className='font-semibold'>Página</h3>
      {totalPages > 0 &&
        Array.from({ length: totalPages }).map((_, index) => (
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
  );
};

export default PageContent;
