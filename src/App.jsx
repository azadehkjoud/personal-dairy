import {useEffect, useState} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {saveLocalStorage} from './modules/storage.js';
import {addEntry, updateEntry} from './modules/entryManagement.js';
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
