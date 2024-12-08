import React, { useEffect } from 'react'
import style from "./Register.module.css"
export default function Register() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Register")
    return (
        <div>

        </div>
    )
}
