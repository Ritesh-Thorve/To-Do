import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Signup from '../SignUp/SignUp.jsx'

function Home() {
    return (
        <>
            <div className='fixed w-full'>
                <Navbar />
            </div>
            <Signup />
        </>
    )
}

export default Home
