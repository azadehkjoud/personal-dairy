import {useState, useEffect} from 'react';

const AddEntryModal = ({entry, addEntry}) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (entry) {
            setId(entry.id);
            setTitle(entry.title);
            setDate(entry.date);
            setImageUrl(entry.imageUrl);
            setContent(entry.content);
        }
    }, [entry]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalId = id || crypto.randomUUID();

        // If no date is selected, set date to today's date
        const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const finalDate = date || currentDate; // Use selected date or today's date

        // If the image URL is empty, use a default placeholder image
        const finalImageUrl = imageUrl || 'https://via.placeholder.com/500x500'; // Set your desired placeholder URL here

        // Validate input
        if (!title || !finalImageUrl || !content) {
            alert("Please fill all fields except the date.");
            return;
        }

        const updatedEntry = {
            ...entry, // Keep the same ID or other unchanged fields
            id: finalId,
            title,
            date: finalDate,
            imageUrl: finalImageUrl,
            content,
        };

        addEntry(updatedEntry); // Call either add or update
        clearForm();
    };

    const clearForm = () => {
        if (!entry) {
            setTitle('');
            setContent('');
            setDate('');
            setImageUrl('');
        }
    }

    return (
            <dialog id={entry ? 'edit' + entry.id : 'new-entry-modal'} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className="text-2xl text-primary font-bold mb-4">{entry ? 'Edit Entry' : 'Add New Entry'}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <label className="input input-bordered flex items-center gap-2">Title: <input id="form-title" type="text" className="grow" placeholder="Title here..." value={title} onChange={(e) => setTitle(e.target.value)} /></label>
                        <label className="input input-bordered flex items-center gap-2">Date: <input id="form-date" type="date" className="grow" value={date} onChange={(e) => setDate(e.target.value)} /></label>
                        <label className="input input-bordered flex items-center gap-2">Image: <input id="form-image-url" type="text" className="grow" placeholder="URL to image here..." value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /></label>
                        <textarea className="textarea textarea-bordered w-full" id="form-content" placeholder="Content..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                        <button type="submit" onClick={() => document.getElementById(entry ? 'edit' + entry.id : 'new-entry-modal').close()} className="btn btn-primary">
                            {entry ? 'Update Entry' : 'Add Entry'}
                        </button>
                    </form>
                    <form method="dialog">
                        <button onClick={clearForm} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
    );
};

export default AddEntryModal;
