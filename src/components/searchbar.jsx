import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        {/* <Sparkles className="search-icon" size={72}  /> */}
        <input
          type="text"
          placeholder="🔍 Trouvez votre prochain chef-d'œuvre..."
          value={term}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;