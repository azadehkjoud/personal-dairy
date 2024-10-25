import {useEffect, useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {addToStorage, getLocalStorage, removeFromStorage, saveLocalStorage} from './modules/storage.js';
import Layout from './Layout.jsx';
import Journal from './pages/Journal.jsx';
import Homepage from './pages/Homepage.jsx';
import {mockObject} from './modules/mockObject.js';

function App() {
    const [entries, setEntries] = useState([]);

    // Load entries from localStorage when the app loads
    useEffect(() => {
        // MOCK OBJECT CALL TO POPULATE LOCALSTORAGE - TODO: REMOVE LATER!
        const storedEntries = mockObject;
        saveLocalStorage('diaryEntries', storedEntries);

        // CALL FROM LOCALSTORAGE TO POPULATE THE PAGE
        // const storedEntries = getLocalStorage('diaryEntries');
        setEntries(storedEntries);
    }, []);

    /**
     * Adds a new entry to the localStorage under 'diaryEntries' and updates the local state
     * @param {Object} entry - The entry to be added, containing relevant data fields for a diary entry
     */
    const addEntry = (entry) => {
        addToStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    }

    /**
     * Updates an existing entry in localStorage under 'diaryEntries' by removing the old version and adding the updated one.
     * Updates the local state to reflect the changes.
     * @param {Object} entry - The entry with updated values, replacing the old entry with matching identifier
     */
    const updateEntry = (entry) => {
        removeFromStorage('diaryEntries', entry);
        addToStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    }

    /**
     * Removes an entry from localStorage under 'diaryEntries' and updates the local state
     * @param {Object} entry - The entry to be removed, identified by unique fields within the entry object
     */
    const removeEntry = (entry) => {
        removeFromStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout addEntry={addEntry} entries={entries} updateEntry={updateEntry} />}>
                <Route index element={<Homepage />} />
                <Route path="journal" element={<Journal />} />
            </Route>,
        ),
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;
