import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = ({addEntry, showModal, setShowModal}) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header addEntry={addEntry} showModal={showModal} setShowModal={setShowModal} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
