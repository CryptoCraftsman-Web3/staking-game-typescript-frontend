import React from 'react'

type Props = {
    openSidebar: () => void
}

const Navbar = (props: Props) => {
    return (
        <>
            <div className="lg:hidden  h-20 bg-black w-screen absolute top-0 flex justify-between items-center px-12 z-20">
                <img alt='logo' src="/images/logo.svg" className="h-full" />
                <button className='w-14 h-14 flex justify-center items-center' onClick={props.openSidebar}>
                    <img alt='menu' src="/images/menu.svg" className="h-1/2" />
                </button>
            </div>
        </>

    )
}

export default Navbar