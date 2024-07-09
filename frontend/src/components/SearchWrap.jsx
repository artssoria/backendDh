import React from 'react';

const SearchWrap = () => {
  return (
    <section className="search-wrap col-span-12 row-span-1 bg-white border-b border-gray-200 flex items-center justify-between px-12">
      <div className="search h-10">
        <label htmlFor="search" className="flex items-center h-full">
          <i className="bi bi-search text-xl text-blue-400"></i>
          <input type="text" id="search" className="block pl-2 h-full" />
        </label>
      </div>
      <div className="user-actions flex">
        <button className="w-8 h-8">
          <a href="#"><i className="bi bi-person-add text-xl text-blue-400"></i></a>
        </button>
        <button className="w-8 h-8">
          <a href="#"><i className="bi bi-person text-xl text-blue-400"></i></a>
        </button>
        <button className="w-8 h-8">
          <a href="#"><i className="bi bi-box-arrow-right text-xl text-blue-400"></i></a>
        </button>
      </div>
    </section>
  );
};

export default SearchWrap;