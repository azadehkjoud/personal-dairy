import React, { useState } from 'react';
import EntryModal from './EntryModal.jsx';


// This component will display individual diary entries as cards.

const DiaryEntryCard = ({ entry }) => {
  const [showEntryModal, setShowEntryModal] = useState(false);

  const openEntryModal = () => setShowEntryModal(true);
  const closeEntryModal = () => setShowEntryModal(false);

  const handleEdit = () => {
    console.log("Edit entry:", entry);
  };

  return (
    <div className="relative group border p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer max-w-lg">
      {/* Image */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={entry.imageUrl || 'https://via.placeholder.com/150'}  // Placeholder image if not provided
          alt={entry.title}
          className="h-64 w-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition duration-300">
        {entry.title}
      </h2>

      {/* Date */}
      <p className="text-sm text-gray-500 mb-4">{entry.date}</p>

      {/* View Button */}
      <button
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        onClick={openEntryModal}
      >
        View Entry
      </button>

      {/* Modal */}
      {showEntryModal && (
        <EntryModal entry={entry} closeModal={closeEntryModal} onEdit={handleEdit} />
      )}
    </div>
  );
};

export default DiaryEntryCard;