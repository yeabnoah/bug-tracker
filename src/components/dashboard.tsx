import { useState, useEffect, FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Moon, PlusCircle, Search, Sun } from "lucide-react"
import BugCard from "./bugCard"
import { useRecoilState } from "recoil"
import themeAtom from "../store/atoms/themeAtom"
import toggleTheme from "../lib/themeToggler"

export default function Dashboard() {
    const [theme, setTheme] = useRecoilState(themeAtom)
    const [isAddBugModalOpen, setIsAddBugModalOpen] = useState(false)

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light"
        setTheme(savedTheme)
        document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }, [])

    const handleAddBug = (event: FormEvent) => {
        event.preventDefault()
        console.log("Bug added!")
        setIsAddBugModalOpen(false)
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
            <main className="flex-1 p-8 overflow-auto">
                <div className="max-w-4xl mx-auto">
                    <header className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Dashboard</h2>
                        <div className="flex items-center gap-4">
                            <Button onClick={() => { toggleTheme(theme, setTheme) }} variant="outline" size="icon">
                                {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
                            </Button>
                            <Dialog open={isAddBugModalOpen} onOpenChange={setIsAddBugModalOpen}>
                                <DialogTrigger asChild>
                                    <Button>
                                        <PlusCircle className="mr-2 h-4 w-4" />
                                        Add New Bug
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Add New Bug</DialogTitle>
                                        <DialogDescription>
                                            Fill out the details below to add a new bug to the tracker.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleAddBug}>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="title" className="text-right">
                                                    Title
                                                </Label>
                                                <Input id="title" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="description" className="text-right">
                                                    Description
                                                </Label>
                                                <Textarea id="description" className="col-span-3" />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-4">
                                                <Label htmlFor="priority" className="text-right">
                                                    Priority
                                                </Label>
                                                <Select>
                                                    <SelectTrigger id="priority" className="col-span-3">
                                                        <SelectValue placeholder="Select priority" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="low">Low</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="high">High</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit">Add Bug</Button>
                                        </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </header>

                    <div className="flex gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                            <Input type="search" placeholder="Search bugs..." className="pl-8" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Bugs</SelectItem>
                                <SelectItem value="open">Open</SelectItem>
                                <SelectItem value="in-progress">In Progress</SelectItem>
                                <SelectItem value="resolved">Resolved</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Bug List Tabs */}
                    <Tabs defaultValue="open" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="open">Open</TabsTrigger>
                            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                            <TabsTrigger value="resolved">Resolved</TabsTrigger>
                        </TabsList>
                        <TabsContent value="open" className="space-y-4">
                            <BugCard
                                title="Login page not responsive on mobile"
                                description="The login page is not displaying correctly on mobile devices, causing usability issues."
                                priority="high"
                                status="open"
                            />
                            <BugCard
                                title="Search functionality returns incorrect results"
                                description="Users report that the search feature is not returning accurate results for certain queries."
                                priority="medium"
                                status="open"
                            />
                        </TabsContent>
                        <TabsContent value="in-progress" className="space-y-4">
                            <BugCard
                                title="Performance issues on data-heavy pages"
                                description="Pages with large datasets are loading slowly and causing timeouts for some users."
                                priority="high"
                                status="in-progress"
                            />
                        </TabsContent>
                        <TabsContent value="resolved" className="space-y-4">
                            <BugCard
                                title="Broken links in navigation menu"
                                description="Several links in the main navigation menu were leading to 404 pages."
                                priority="low"
                                status="resolved"
                            />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    )
}
