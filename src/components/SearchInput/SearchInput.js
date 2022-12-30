import React from 'react';
import "../../assets/styles/components/searchInput/searchInput.scss";

const SearchInput = () => {
    return (
        <div>
            <input type='text' placeholder='جستجو' className='search search-icon' dir='rtl' />
        </div>
    )
};

export default SearchInput;