import {Outlet} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

const Layout = ({addEntry}) => {
    return (
        <div className="flex flex-col max-w-screen">
            <Header addEntry={addEntry} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
