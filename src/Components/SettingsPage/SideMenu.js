import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const SideMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Toggle Button - shows the menu */}
            <button
                className={`absolute mt-1 ml-2 lg:hidden ${isOpen ? 'hidden' : 'block'}`}
                onClick={() => setIsOpen(true)}
            >
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>

            {/* Side Menu */}
            <div className={`bg-white  text-black w-56 md:w-64  lg:w-72 h-screen fixed  transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0`}>
                {/* Close Button - collapses the menu */}
                <button
                    className="p-2 absolute top-0 right-0 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                </button>
                {/* Menu Content */}
                <div className=" ml-8">

                    {/* Menu Items */}
                    <ul className="mt-8 space-y-4">
                        <li>Shared Event Types</li>
                        <li>Single Sign On</li>
                        <li>Workflows</li>
                        <li><b>Data Deletion</b></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
