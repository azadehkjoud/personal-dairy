import {useEffect, useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {
    addToStorage,
    getLocalStorage,
    removeFromStorage,
    saveLocalStorage,
    sortLocalStorageData,
} from './utils/storage.js';
import {mockObject} from './utils/mockObject.js';
import Layout from './Layout.jsx';
import Journal from './pages/Journal.jsx';
import Homepage from './pages/Homepage.jsx';

function App() {
    const [entries, setEntries] = useState([]);

    // Populate entries state with objects out of localStorage
    useEffect(() => {
        saveLocalStorage('diaryEntries', mockObject); // MOCK OBJECT CALL TO POPULATE LOCALSTORAGE - TODO: REMOVE LATER!
        sortLocalStorageData('diaryEntries', 'date', 'descending'); // TEST OF SORTING ON LOAD - TODO: REMOVE LATER!
        setEntries(getLocalStorage('diaryEntries'));
    }, []);

    /**
     * Adds a new entry to the localStorage under 'diaryEntries' and updates the local state
     * @param {Object} entry - The entry to be added, containing relevant data fields for a diary entry
     */
    const addEntry = (entry) => {
        addToStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    };

    /**
     * Updates an existing entry in localStorage under 'diaryEntries' by removing the old version and adding the updated one.
     * Updates the local state to reflect the changes.
     * @param {Object} entry - The entry with updated values, replacing the old entry with matching identifier
     */
    const updateEntry = (entry) => {
        removeFromStorage('diaryEntries', entry);
        addToStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    };

    /**
     * Removes an entry from localStorage under 'diaryEntries' and updates the local state
     * @param {Object} entry - The entry to be removed, identified by unique fields within the entry object
     */
    const removeEntry = (entry) => {
        removeFromStorage('diaryEntries', entry);
        setEntries(() => getLocalStorage('diaryEntries'));
    };

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
