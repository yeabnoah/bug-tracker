import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { PlusCircle } from 'lucide-react'
import { DialogFooter, DialogHeader } from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useRecoilState } from 'recoil'
import modalOpened from '@/store/atoms/modalOpen'
import { FormEvent } from 'react'

const Modal = () => {
    const [isAddBugModalOpen, setIsAddBugModalOpen] = useRecoilState(modalOpened)

    const handleAddBug = (event: FormEvent) => {
        event.preventDefault()
        console.log("Bug added!")
        setIsAddBugModalOpen(false)
    }
    return (
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
    )
}

export default Modal
