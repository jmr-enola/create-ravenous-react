import React, { useState } from 'react';
import '../styles/SearchBar.css'

function SearchBar() {

    const searchOptions = [
        'Best Match', 
        'Highest Rated', 
        'Most Reviewed'
    ];

    const [ search, setSearch ] = useState('');
    const handleOnChangeSearch = ({ target }) => {
        setSearch(target.value);
    };

    const [ location, setLocation ] = useState('');
    const handleOnChangeLocation = ({ target }) => {
        setLocation(target.value);
    };

    const [ sortOption, setSortOption ] = useState(0);
    const handleOnClickOption = ({ target }) => {
        setSortOption(target.value);
    };

    const handleOnClickSearch = (event) => {
        event.preventDefault();
        console.log(search, location, searchOptions[sortOption]);
    }

    return (
        <div className='search-bg'>
            <section className='search-bar'>
                <div className='filter'>
                    <ul>
                        <li key='0' onClick={handleOnClickOption} 
                            className={sortOption === 0 ? 'selected-li' : ''}
                            value="0" 
                        >
                            {searchOptions[0]}
                        </li>
                        <li key='1' onClick={handleOnClickOption} 
                            className={sortOption === 1 ? 'selected-li' : ''}
                            value="1"
                        >
                            {searchOptions[1]}
                        </li>
                        <li key='2' onClick={handleOnClickOption} 
                            className={sortOption === 2 ? 'selected-li' : ''}
                            value="2" 
                        >
                            {searchOptions[2]}
                        </li>
                    </ul>
                </div>
                <form className='search-form' onSubmit={handleOnClickSearch}>
                    <input 
                        className='search-field'
                        type='text' 
                        placeholder="Search Business"
                        onChange={handleOnChangeSearch}
                    />
                    <input 
                        className='search-field'
                        type='text' 
                        placeholder="Where?"
                        onChange={handleOnChangeLocation}
                    />
                    <input 
                        className='search-submit'
                        type='submit' 
                        value="Let's Go"
                    />
                </form>
            </section>
        </div>
    );
}

export default SearchBar;