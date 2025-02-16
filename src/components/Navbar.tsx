import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-16 px-6 flex items-center justify-end">
            <ThemeSwitcher />
        </nav>
    );
};

export default Navbar;
