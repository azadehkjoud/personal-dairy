import {Outlet} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Layout = ({entries, addEntry, updateEntry}) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header addEntry={addEntry} />
            <Outlet context={{entries, updateEntry}} />
            <Footer />
        </div>
    );
};

export default Layout;
