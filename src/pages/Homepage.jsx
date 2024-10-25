import {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';
import DiaryEntryCard from '../components/DiaryEntryCard.jsx';
import Hero from '../components/Hero.jsx';

// This is the main page that will display all the diary entries and handle adding new entries
const Homepage = () => {
    const [limitEntries, setLimitEntries] = useState([]);
    const {entries, updateEntry} = useOutletContext();

    useEffect(() => {
        setLimitEntries(entries.slice(0, 6));
    }, [entries]);

    return (
        <>
            <Hero entries={entries} />
            <main className="flex self-center w-full max-w-[80rem]">
                <section className="flex flex-row flex-wrap justify-center max-w-full gap-8 py-4">
                    {limitEntries.map((entry) => (
                        <DiaryEntryCard key={entry.id} entry={entry} updateEntry={updateEntry} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Homepage;