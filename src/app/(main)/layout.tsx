import Sidebar from '@/components/sidebar'
import React from 'react'

interface Props {
    children :React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div className='flex overflow-hidden h-screen'>
            <Sidebar/>
            <div className='w-full '>
                {props.children}
            </div>
        </div>
    )
}
export default Layout