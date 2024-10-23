import DiaryEntryCard from './components/DiaryEntryCard.jsx';

// This is the main page that will display all the diary entries and handle adding new entries
const Homepage = ({entries}) => {
    return (
        <main className="p-5 self-center w-full max-w-[1200px]">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {entries.map((entry, index) => (
                    <DiaryEntryCard key={index} entry={entry} />
                ))}
            </section>
        </main>
    );
};

export default Homepage;