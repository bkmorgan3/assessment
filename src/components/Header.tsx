import { Button } from "@radix-ui/themes"

export default function Header() {
    return (
        <header className="my-6 px-3.5">
            <nav>
                <ul className="flex justify-between">
                    <li>
                        <h1 className="text-3xl">Form Title</h1>
                    </li>
                    <li>
                        <Button 
                            size="3" 
                            className="text-indigo-700 bg-slate-300 border-transparent cursor-pointer" 
                            radius="full">
                                Cancel
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}