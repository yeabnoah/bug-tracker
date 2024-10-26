import React from 'react'
import Sidebar from "./sidebar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='md:flex min-h-screen'>

            <Sidebar />
            <div className=' md:flex-1'>
                {children}
            </div>

        </div >
    )
}

export default DashboardLayout
