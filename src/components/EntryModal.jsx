import AddEntryModal from './AddEntryModal.jsx';

const EntryModal = ({entry, updateEntry}) => {
    const openEdit = () => {
        document.getElementById('show' + entry.id).close();
        document.getElementById('edit' + entry.id).showModal();
    };

    return (
        <>
            <dialog id={'show' + entry.id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <figure className="w-full sm:w-1/3">
                            <img
                                src={entry.imageUrl}
                                alt={entry.title}
                                className="object-cover w-full h-full rounded-br-xl rounded-tl-xl"
                            />
                        </figure>
                        <div className="w-full sm:w-2/3 flex flex-col gap-2">
                            <h2 className="font-bold text-2xl">{entry.title}</h2>
                            <p className="text-sm opacity-50">{entry.date}</p>
                            <p className="text-lg">{entry.content}</p>

                            <button className="btn btn-primary self-end" onClick={() => openEdit()}>
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>

            <AddEntryModal
                entry={entry}
                addEntry={updateEntry}
            />
        </>
    );
};

export default EntryModal;
