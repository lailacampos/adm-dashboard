import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-opacity-50 backdrop-blur-md shadow-lg border-b fixed top-0 w-full h-16 flex items-center justify-between
            bg-gray-50 border-gray-300
            dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-7xl ml-30 md:ml-48 text-left py-4 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
            </div>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
