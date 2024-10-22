import React, { useState, useEffect } from 'react';
import DiaryEntryCard from './components/DiaryEntryCard.jsx';
import AddEntryModal from './components/AddEntryModal.jsx';

  // This is the main page that will display all the diary entries and handle adding new entries
  
const Homepage = () => {
  const [entries, setEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Load entries from localStorage when the app loads
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    setEntries(savedEntries);
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addEntry = (newEntry) => {
    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    closeModal();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Personal Diary</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={openModal}
      >
        Add Entry
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {entries.map((entry, index) => (
          <DiaryEntryCard key={index} entry={entry} />
        ))}
      </div>
      {showModal && <AddEntryModal closeModal={closeModal} addEntry={addEntry} />}
    </div>
  );
};

export default Homepage;