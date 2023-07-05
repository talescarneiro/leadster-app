import React from 'react';

interface PageContentProps {
  pages: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

const PageContent: React.FC<PageContentProps> = ( { pages, currentPage, setCurrentPage }) => {
  const handlePageClick = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }

  return (
    <div className='flex gap-3 items-center'>
      <h3 className='font-semibold'>Página</h3>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button className={`px-3 py-1 rounded-md border ${currentPage === index + 1 ? 'border-blue-500 text-blue-500 font-semibold' : 'border-none'}`} key={index} value={index + 1} onClick={() => handlePageClick(index + 1)}>{index + 1}</button>
        )
      })}
    </div>
  );
};

export default PageContent;
