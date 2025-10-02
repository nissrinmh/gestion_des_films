import React from 'react';
import { TrendingUp, Calendar, Star, Award, Sparkles, Trophy ,Type } from 'lucide-react';

const SortButtons = ({ onSort }) => {
  return (
    <div className="sort-buttons">
      <button onClick={() => onSort('rating')}>
        <Trophy size={18}  />
         Par excellence
      </button>
      <button onClick={() => onSort('year')}>
        <Calendar size={18} />
         Par époque
      </button>
      <button onClick={() => onSort('title')}>
        <Type size={18} />
         Alphabétique
      </button>
    </div>
  );
};

export default SortButtons;