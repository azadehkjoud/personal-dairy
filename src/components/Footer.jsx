const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content flex justify-center items-center p-4">
            <aside className="grid-flow-col items-center">
                <i className="fa-solid fa-book-open"></i>
                <p>One Line A Day - Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
        </footer>
    );
};

export default Footer;
