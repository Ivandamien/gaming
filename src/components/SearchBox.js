import React, { useEffect } from 'react';

const SearchBox = ({ isActive, onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (isActive && !event.target.closest('.search-container')) {
            onClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isActive, onClose]);
    
    return (
        <div className={`search-container ${isActive ? 'active' : ''}`} data-search-box>
            <div className="input-wrapper">
                <input
                    type="search"
                    name="search"
                    aria-label="search"
                    placeholder="Search here..."
                    className="search-field"
                />
                <button
                    className="search-submit"
                    aria-label="submit search"
                    data-search-toggler
                >
                    <ion-icon name="search-outline" />
                </button>
                <button
                    className="search-close"
                    aria-label="close search"
                    data-search-toggler
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default SearchBox