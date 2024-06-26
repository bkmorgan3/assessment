import { useState } from 'react'
import Form from "../components/Form";
import Header from "../components/Header";

export default function FormPage() {
    const [name, setName] = useState('')
    
     return (
        <main className="bg-gray-50">
            <Header setName={setName} />
            <Form name={name} setName={setName} />
        </main>
    )
}