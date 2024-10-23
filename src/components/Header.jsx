import AddEntryModal from './AddEntryModal.jsx';

const Header = ({showModal, addEntry, openModal, closeModal}) => {
    return (
        <header className="flex justify-center items-center w-full">
            <nav className="navbar bg-base-100 max-w-[1200px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">WIP JOURNAL</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <p className="text-xl font-bold"><i className="fa-solid fa-book-open"></i> One Line A Day</p>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle hidden sm:block">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <button onClick={openModal} className="btn btn-ghost btn-circle">
                        <i className="fa-solid fa-feather-pointed"></i>
                    </button>
                </div>
            </nav>

            {showModal && <AddEntryModal closeModal={closeModal} addEntry={addEntry} />}
        </header>
    );
};

export default Header;
