import { useState } from 'react';
import EntryModal from './EntryModal.jsx';
import AddEntryModal from './AddEntryModal.jsx';

// This component will display individual diary entries as cards.
const DiaryEntryCard = ({ entry, updateEntry }) => {
    const [showEntryModal, setShowEntryModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const openEntryModal = () => setShowEntryModal(true);
    const closeEntryModal = () => setShowEntryModal(false);

    const openEditModal = () => setShowEditModal(true);
    const closeEditModal = () => setShowEditModal(false);

    const handleEdit = () => {
        closeEntryModal(); // Close the entry view modal
        openEditModal(); // Open the edit modal
    };

    const handleUpdateEntry = (updatedEntry) => {
        updateEntry(updatedEntry); // Call the parent's update function
        closeEditModal(); // Close the edit modal
    };

    return (
        <div className="card bg-base-100 max-w-96 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            <figure className="overflow-hidden rounded-br-xl rounded-tl-xl p-5">
                <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="max-h-64 w-full object-cover rounded-br-xl rounded-tl-xl"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {entry.title}
                    {entry.date ===  new Date().toISOString().split('T')[0] ? (
                        <div className="badge badge-secondary absolute top-3 right-3">NEW</div>) : ''}

                </h2>
                <p>{entry.date}</p>
                <button className="btn btn-primary" onClick={openEntryModal}>
                    View Entry
                </button>

                {/* View Entry Modal */}
                {showEntryModal && (
                    <EntryModal
                        entry={entry}
                        closeModal={closeEntryModal}
                        onEdit={handleEdit} // Opens the edit modal when clicked
                    />
                )}

                {/* Edit Entry Modal */}
                {showEditModal && (
                    <AddEntryModal
                        closeModal={closeEditModal}
                        addEntry={handleUpdateEntry} // Pass the updated entry to parent
                        entry={entry} // Pre-populate the form with the current entry data
                    />
                )}
            </div>
        </div>
    );
};

export default DiaryEntryCard;
