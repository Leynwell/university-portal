import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const location = useLocation();

    return (

        <header className="fixed w-full z-10">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between lg:justify-start lg:gap-24 max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="University Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">University Portal</span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={menuOpen ? 'true' : 'false'}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Відкрити головне меню</span>
                            <svg className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${menuOpen ? '' : 'hidden'}`}
                         id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${location.pathname === '/' ? 'text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Головна
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${location.pathname === '/about' ? 'text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Про сайт
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${location.pathname === '/gallery' ? 'text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Галерея
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/news"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${location.pathname === '/news' ? 'text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Новини
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacts"
                                    className={`block py-2 pl-3 pr-4 rounded lg:p-0 ${location.pathname === '/contacts' ? 'text-white bg-purple-700 lg:bg-transparent lg:text-purple-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}
                                >
                                    Контакти
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
