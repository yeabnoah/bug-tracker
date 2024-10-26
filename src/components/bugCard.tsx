import { CheckCircle2, Circle, Clock } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

function BugCard({ title, description, priority, status }: { title: string, description: string, priority: string, status: string }) {
    const priorityColor: any = {
        low: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-100",
        medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-100",
        high: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-100"
    }

    const statusIcon: any = {
        open: <Circle className="h-4 w-4 text-red-500" />,
        "in-progress": <Clock className="h-4 w-4 text-yellow-500" />,
        resolved: <CheckCircle2 className="h-4 w-4 text-green-500" />
    }

    return (
        <Card className="bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span>{title}</span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${priorityColor[priority]}`}>
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {statusIcon[status]}
                    <span className="ml-1 capitalize">{status.replace("-", " ")}</span>
                </div>
                <Button variant="ghost" size="sm">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    )
}

export default BugCard