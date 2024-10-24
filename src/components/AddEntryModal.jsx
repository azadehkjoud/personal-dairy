import { useState, useEffect } from 'react';

// This modal will handle adding new diary entries.
const AddEntryModal = ({ setShowModal, addEntry, entry }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  // If an entry is passed in, populate the form with the existing data (for editing)
  useEffect(() => {
    if (entry) {
      setTitle(entry.title);
      setDate(entry.date);
      setImageUrl(entry.imageUrl);
      setContent(entry.content);
    }
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      title,
      date: finalDate,
      imageUrl: finalImageUrl,
      content,
    };

    addEntry(updatedEntry); // Call either add or update
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{entry ? 'Edit Entry' : 'Add New Entry'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <textarea
            className="border p-2 mb-2 w-full"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            {entry ? 'Update Entry' : 'Add Entry'}
          </button>
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded ml-4" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;
