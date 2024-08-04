import React from 'react';

function Search({ onSearch }) {

    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="relative flex items-center max-w-[300px]">
            <input
                type="text"
                className="form-control w-full rounded-md border-gray-200 sm:text-sm pl-10 pr-12"
                placeholder="Buscar por nombre..."
                onChange={handleSearch}
            />
            <span className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
                </svg>
            </span>
        </div>
    );
}

export default Search;
