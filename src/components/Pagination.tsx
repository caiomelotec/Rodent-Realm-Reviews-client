type Pagination = {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ pageNumber, setPageNumber }: Pagination) => {
  return (
    <div className="flex gap-1 items-center justify-center">
      {pageNumber > 1 && (
        <button
          className="bg-blue-800 hover:bg-blue-600 dark:bg-slate-900 text-white p-5 w-fit rounded-lg"
          onClick={() => setPageNumber(1)}
        >
          1
        </button>
      )}
      {pageNumber > 2 && (
        <button
          className="hover:bg-blue-600 bg-blue-800 dark:bg-slate-900 text-white p-5 w-fit rounded-lg"
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          {pageNumber - 1}
        </button>
      )}
      <button
        className={`bg-blue-600 dark:bg-slate-700 text-white p-5 w-fit rounded-lg
    `}
      >
        {pageNumber}
      </button>
      <button
        className="hover:bg-blue-600 bg-blue-800 dark:bg-slate-900 text-white p-5 w-fit rounded-lg"
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Next Page
      </button>
    </div>
  );
};
