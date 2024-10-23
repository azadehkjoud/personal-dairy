// This modal will handle adding new diary entries.
const AddEntryModal = ({ closeModal, addEntry }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !imageUrl || !content) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      title,
      date,
      imageUrl,
      content,
    };

    addEntry(newEntry);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Add New Entry</h2>
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
            Add Entry
          </button>
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded ml-4" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEntryModal;