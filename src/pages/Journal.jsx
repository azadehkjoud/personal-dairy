import DiaryEntryCard from '../components/DiaryEntryCard.jsx';

const Journal = ({entries, updateEntry}) => {
    return (
        <main className="self-center w-full max-w-[80rem] mt-24">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                {entries.map((entry) => (
                    <DiaryEntryCard key={entry.id} entry={entry} updateEntry={updateEntry} />
                ))}
            </section>
        </main>
    );
};

export default Journal;
