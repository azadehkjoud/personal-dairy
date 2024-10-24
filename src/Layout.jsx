import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header addEntry={addEntry} showModal={showModal} openModal={openModal} closeModal={closeModal} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
