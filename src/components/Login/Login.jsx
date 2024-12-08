import React, { useEffect } from 'react'
import style from "./Login.module.css"
export default function Login() {
    const usePageTitle = (title) => {
        useEffect(() => {
            document.title = title;
        }, [title]);
    };
    usePageTitle("Log In")
    return (
        <div>

        </div>
    )
}
