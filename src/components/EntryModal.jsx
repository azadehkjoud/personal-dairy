// This modal will show the full diary entry when a card is clicked.

const EntryModal = ({entry, closeModal, onEdit}) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-40">
            <div className="bg-white p-10 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 flex"> {/* Adjusted width and padding */} {/* Left side: Image */}
                <div className="w-1/3">
                    <img
                        src={entry.imageUrl || 'https://via.placeholder.com/150'}  // Default placeholder image if no imageUrl is provided
                        alt={entry.title}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Right side: Content */}
                <div className="w-2/3 px-6"> {/* Increased padding on the right side */} {/* Title */}
                    <h2 className="text-2xl font-bold mb-2">{entry.title || "PLACE IMPRESSIVE TITLE HERE"}</h2> {/* Increased title size */}

                    {/* Date */}<p className="text-sm text-gray-500 mb-4">{entry.date || "10/22/2024"}</p>

                    {/* Content */}<p className="text-gray-700 mb-6">
                        {entry.content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={onEdit}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryModal;