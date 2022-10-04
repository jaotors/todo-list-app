import React from 'react'

const SearchForm = ({ search, onSearch }) => {
  return (
    <div className='search-form'>
      Search
      <input type='text' value={search} onChange={onSearch} />
    </div>
  )
}

export default SearchForm
