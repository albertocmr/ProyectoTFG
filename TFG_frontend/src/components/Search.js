import React from 'react';

function Search({ onSearch }) {

    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="position-relative d-flex align-items-center" style={{ maxWidth: '300px' }}>
            <input
                type="text"
                className="form-control"
                placeholder="Buscar por nombre..."
                onChange={handleSearch}
            />
            
            <span className="position-absolute top-50 translate-middle-y end-0 pe-4 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-search" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </span>
        </div>
    );
}

export default Search;
