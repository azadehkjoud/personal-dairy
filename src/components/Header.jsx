import AddEntryModal from './AddEntryModal.jsx';
import Themecontroller from './Themecontroller.jsx';

const Header = ({addEntry, showModal, setShowModal}) => {
    return (
        <header className="flex justify-center items-center w-full fixed mt-4 z-40">
            <nav className="navbar shadow-2xl bg-base-100 max-w-[80rem] mx-4 rounded-br-2xl rounded-tl-2xl">
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
                        <Themecontroller />
                    </button>
                    <button onClick={() => setShowModal(true)} className="btn btn-ghost btn-circle">
                        <i className="fa-solid fa-feather-pointed"></i>
                    </button>
                </div>
            </nav>

            {showModal && <AddEntryModal setShowModal={setShowModal} addEntry={addEntry} />}
        </header>
    );
};

export default Header;
