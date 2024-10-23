import {useState} from 'react';
import EntryModal from './EntryModal.jsx';

// This component will display individual diary entries as cards.
const DiaryEntryCard = ({entry}) => {
    const [showEntryModal, setShowEntryModal] = useState(false);
    const openEntryModal = () => setShowEntryModal(true);
    const closeEntryModal = () => setShowEntryModal(false);

    const handleEdit = () => {
        console.log("Edit entry:", entry);
    };
// object-cover transform group-hover:scale-105 transition duration-300 ease-in-out
    return (
        <div className="card bg-base-100 max-w-96 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
            <figure className="overflow-hidden rounded-br-xl rounded-tl-xl p-5">
                <img
                    src={entry.imageUrl || 'https://via.placeholder.com/150'}
                    alt={entry.title}
                    className="max-h-64 w-full object-cover rounded-br-xl rounded-tl-xl"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {entry.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{entry.date}</p>
                <button
                    className="btn btn-primary"
                    onClick={openEntryModal}
                >
                    View Entry
                </button>

                {/* Modal */} {showEntryModal && (
                <EntryModal entry={entry} closeModal={closeEntryModal} onEdit={handleEdit} />
            )}
            </div>
        </div>
    );
};

export default DiaryEntryCard;

