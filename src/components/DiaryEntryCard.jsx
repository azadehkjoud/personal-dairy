import {useState} from 'react';
import EntryModal from './EntryModal.jsx';
import AddEntryModal from './AddEntryModal.jsx';

// This component will display individual diary entries as cards.
const DiaryEntryCard = ({entry, updateEntry}) => {
    const [showEntryModal, setShowEntryModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const handleEdit = () => {
        setShowEntryModal(false);
        setShowEditModal(true);
    };

    const handleUpdateEntry = (updatedEntry) => {
        updateEntry(updatedEntry); // Call the parent's update function
        setShowEditModal(false); // Close the edit modal
    };

    return (
        <>
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
                        {entry.title} {entry.date === new Date().toISOString().split('T')[0] ? (
                        <div className="badge badge-secondary absolute top-3 right-3">NEW</div>) : ''}

                    </h2>
                    <p>{entry.date}</p>
                    <button className="btn btn-primary" onClick={() => setShowEntryModal(true)}>
                        View Entry
                    </button>

                </div>
            </div>

            {/* View Entry Modal */} {showEntryModal && (
            <EntryModal
                entry={entry}
                setShowModal={() => setShowEntryModal(false)}
                onEdit={handleEdit} // Opens the edit modal when clicked
            />
        )}

            {/* Edit Entry Modal */} {showEditModal && (
            <AddEntryModal
                setShowModal={setShowEditModal}
                addEntry={handleUpdateEntry} // Pass the updated entry to parent
                entry={entry} // Pre-populate the form with the current entry data
            />
        )}
        </>
    );
};

export default DiaryEntryCard;
