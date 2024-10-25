const Footer = () => {
    return (
        <footer className="footer bg-accent text-accent-content flex justify-center items-center py-4 mt-4">
            <aside className="grid-flow-col items-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <i className="fa-solid fa-book-open"></i> One Line A Day</p>
            </aside>
        </footer>
    );
};

export default Footer;
