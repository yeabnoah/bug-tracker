import { Bug, CheckCircle2, LayoutDashboard, PlusCircle, Settings } from 'lucide-react'
import { Button } from './ui/button'
import { Link, Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Sisebar = () => {
    return (
        <div>
            <aside className="w-64 bg-white h-screen dark:bg-gray-950 p-4 hidden md:block border-r border-gray-200 dark:border-gray-800">
                <div className="flex items-center mb-6">
                    <Bug className="h-6 w-6 text-blue-500 mr-2" />
                    <h1 className="text-xl font-bold">BugTracker Lite</h1>
                </div>
                <nav className="space-y-2">

                    <Button variant="ghost" className="w-full justify-start">

                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </Button>

                    <Button variant="ghost" className="w-full justify-start">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Bug
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Resolved
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                    </Button>
                </nav>
            </aside>
            <Outlet />
        </div>

    )
}

export default Sisebar;
