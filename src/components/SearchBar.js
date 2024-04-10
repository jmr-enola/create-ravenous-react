import React from 'react';
import '../styles/SearchBar.css'

function SearchBar() {
    return (
        <div className='search-bg'>
            <section className='search-bar'>
                <div className='filter'>
                    <ul>
                        <li>Best Match</li>
                        <li>Highest Rated</li>
                        <li>Most Reviewed</li>
                    </ul>
                </div>
                <form className='search-form'>
                    <input 
                        className='search-field'
                        type='text' 
                        placeholder="Search Business"
                    />
                    <input 
                        className='search-field'
                        type='text' 
                        placeholder="Where?"
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