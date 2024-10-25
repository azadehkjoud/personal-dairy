import {addToStorage, getLocalStorage, removeFromStorage} from './storage.js';




/**
 * Adds a new entry to the localStorage under 'diaryEntries' and updates the local state
 * @param {Object} newEntry - The entry to be added, containing relevant data fields for a diary entry
 */

export const addEntry = (newEntry) => {
    addToStorage('diaryEntries', newEntry);
    setEntries(() => getLocalStorage('diaryEntries'));
}

/**
 * Updates an existing entry in localStorage under 'diaryEntries' by removing the old version and adding the updated one.
 * Updates the local state to reflect the changes.
 * @param {Object} updatedEntry - The entry with updated values, replacing the old entry with matching identifier
 */

export const updateEntry = (updatedEntry) => {
    removeFromStorage('diaryEntries', updatedEntry);
    addToStorage('diaryEntries', updatedEntry);
    setEntries(() => getLocalStorage('diaryEntries'));
}


/**
 * Removes an entry from localStorage under 'diaryEntries' and updates the local state
 * @param {Object} entry - The entry to be removed, identified by unique fields within the entry object
 */
export const removeEntry = (entry) => {
    removeFromStorage('diaryEntries', entry);
    setEntries(() => getLocalStorage('diaryEntries'));
}