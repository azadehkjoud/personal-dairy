import React, { useState } from 'react';
import DiaryEntryCard from './DiaryEntryCard'; // Import the card component

const DiaryManager = () => {
  const [entries, setEntries] = useState([
    { id: 1, title: 'First Entry', date: '2024-10-23', imageUrl: '', content: 'This is the first entry.' },
    { id: 2, title: 'Second Entry', date: '2024-10-22', imageUrl: '', content: 'This is the second entry.' },
  ]);

 
 

  return (
    <div>
      {/* Render each entry using DiaryEntryCard */}
      {entries.map((entry) => (
        <DiaryEntryCard key={entry.id} entry={entry} updateEntry={updateEntry} />
      ))}
    </div>
  );
};

export default DiaryManager;