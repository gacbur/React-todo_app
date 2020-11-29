import React, { useState, useEffect } from 'react';
import moon from '../icons/moon.svg'
import sun from '../icons/sun.svg'

const useThemeSwitcher = () => {

    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark")
        }
        else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light")
        }

    }, [mode])

    return (
        <>
            <img
                className="darkmode-switcher"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
                src={mode === "dark" ? sun : moon}
                alt="darkmode-switcher"

            >
            </img>
        </>
    );
}

export default useThemeSwitcher;