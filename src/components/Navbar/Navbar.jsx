import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 ">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white font-bold text-xl">
                    <span className='text-yellow-600'>Crush Your Goals :</span> ToDo App
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
