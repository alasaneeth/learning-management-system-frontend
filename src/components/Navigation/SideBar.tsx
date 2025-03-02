import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdMenuOpen } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { menuItems } from './MenuItemList';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index:number) => {
        setSelectedItem(index);
    };

    return (
        <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-black text-white ${open ? 'w-60' : 'w-16'}`}>
            {/* Header */}
            <div className='px-3 py-2 h-20 flex justify-between items-center'>
                <div>
                    <MdMenuOpen
                        size={34}
                        className={`duration-500 cursor-pointer ${!open && 'rotate-180'}`}
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>

            {/* Body */}
            <ul className='flex-1'>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`px-3 py-2 my-2 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group ${selectedItem === index ? 'bg-white text-black' : 'hover:bg-blue-800'}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <Link to={item.path} className="flex items-center w-full">
                            <div>{item.icons}</div>
                            <p className={`ml-3 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                                {item.label}
                            </p>
                        </Link>
                        <p
                            className={`${
                                open && 'hidden'
                            } absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
                        >
                            {item.label}
                        </p>
                    </li>
                ))}
            </ul>

            {/* Footer */}
            <div className='flex items-center gap-2 px-3 py-2'>
                <div>
                    <FaUserCircle size={30} />
                </div>
                <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
                    <p>Saheb</p>
                    <span className='text-xs'>saheb@gmail.com</span>
                </div>
            </div>
        </nav>
    );
}
