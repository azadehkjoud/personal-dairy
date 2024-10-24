import EntryModal from './EntryModal.jsx';

// This component will display individual diary entries as cards.
const DiaryEntryCard = ({entry, updateEntry}) => {
    return (
        <>
            <div className="card bg-base-100 max-w-96 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                <figure className="overflow-hidden rounded-br-xl rounded-tl-xl p-5">
                    <div className="w-full h-64">
                        <img
                            src={entry.imageUrl}
                            alt={entry.title}
                            className="object-cover w-full h-full rounded-br-xl rounded-tl-xl"
                        />
                    </div>
                </figure>
                <div className="card-body">
                    {entry.date === new Date().toISOString().split('T')[0] ? (<div className="badge badge-secondary absolute top-3 right-3">NEW</div>) : ''}
                    <h2 className="card-title">
                        {entry.title}
                    </h2>
                    <p>{entry.date}</p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('show' + entry.id).showModal()}>
                        View Entry
                    </button>

                </div>
            </div>

            <EntryModal
                entry={entry}
                updateEntry={updateEntry}
            />
        </>
    );
};

export default DiaryEntryCard;
