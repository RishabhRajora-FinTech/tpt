import React from 'react';

const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-box"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBox;
