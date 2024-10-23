import {useEffect, useState} from 'react';
import Homepage from './Homepage.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
    const [entries, setEntries] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Load entries from localStorage when the app loads
    useEffect(() => {
        const savedEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        setEntries(savedEntries);
    }, []);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const addEntry = (newEntry) => {
        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
        closeModal();
    };


 // Function to update an entry when it's edited
 const updateEntry = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );

}
    return (
        <div className="flex flex-col">
            <Header addEntry={addEntry}  showModal={showModal} openModal={openModal} closeModal={closeModal} />
            <Homepage entries={entries} updateEntry={updateEntry} />
            <Footer />
        </div>
    );
}

export default App;
