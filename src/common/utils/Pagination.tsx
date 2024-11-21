import React from 'react';

type Pagination = {
  currentPage: number
  totalPages: number,
  onPageChange: (page: number) => void
}

export const Pagination = (props: Pagination) => {

  const {currentPage, totalPages, onPageChange} = props

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const range = 5 ; // Количество страниц слева и справа от текущей страницы

    // Стрелка назад
    if (currentPage > 1) {
      pageNumbers.push(
        <button key="prev" onClick={() => onPageChange(currentPage - 1)}>
          {'<'}
        </button>
      );
    }

    // Первая страница
    if (currentPage > range + 1) {
      pageNumbers.push(
        <button key={1} onClick={() => onPageChange(1)}>1</button>
      );
    }

    // Многоточие
    if (currentPage > range + 2) {
      pageNumbers.push(<span key="dots1">{'. . .'}</span>);
    }

    // Номера страниц
    for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPages - 1, currentPage + range); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          style={{fontWeight: currentPage === i ? 'bold' : 'normal'}}
        >
          {i}
        </button>
      );
    }

    // Многоточие
    if (currentPage < totalPages - range - 1) {
      pageNumbers.push(<span key="dots2">{' . . . '}</span>);
    }

    // Последняя страница
    if (currentPage < totalPages - range) {
      pageNumbers.push(
        <button key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</button>
      );
    }

    // Стрелка вперед
    if (currentPage < totalPages) {
      pageNumbers.push(
        <button key="next" onClick={() => onPageChange(currentPage + 1)}>
          {'>'}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      {renderPageNumbers()}
    </div>
  );
};

