// FUNCTIONS RELATED TO: LOCALSTORAGE OPERATIONS



export const getLocalStorage = (storageName) => {
    return JSON.parse(localStorage.getItem(storageName)) || [];
};

export const saveLocalStorage = (storageName, storageArray) => {
    localStorage.setItem(storageName, JSON.stringify(storageArray));
};

export const isStored = (storageName, storageItem) => {
    const storage = getLocalStorage(storageName);
    return storage.some((item) => item.id === storageItem.id);
};