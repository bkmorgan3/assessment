import { useState } from "react";
import  {CheckboxSection} from "./CheckboxSection";
import { EscrowSection } from "./EscrowSection";
import { NameSection } from "./NameSection";
import { SubmitSection } from "./Submit";

type FormProps = {
    name: string 
    setName: React.Dispatch<React.SetStateAction<string>>
}

export default function Form({name, setName}: FormProps) {
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("hi", name)
    }
    return <div className="h-screen max-w-[880px] min-w-[560px] m-auto">
        <form>
            <CheckboxSection checked={checked} setChecked={setChecked} />
            <NameSection name={name} setName={setName} />
            <EscrowSection />
            <SubmitSection onSubmit={handleSubmit} />
        </form>
        </div>
}