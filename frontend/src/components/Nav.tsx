import { useState } from "react";
import icon from "../assets/imgs/icon.png";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Home", "Tours", "Gallery", "About", "Contact"];

    return (
        <nav className="relative z-50 w-full px-6 py-3 
                    flex items-center justify-between
                    bg-[var(--color-bg)] border-b border-[var(--color-border)]">

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <img
                    src={icon}
                    alt="Elegant Yachting"
                    className="w-10 h-10 object-contain"
                />
                <span className="text-[var(--color-gold)] font-semibold text-xl sm:block font-elegant ">
                    Elegant Yachting
                </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-[var(--color-text-primary)] font-medium">
                {navItems.map((item, index) => (
                    <li
                        key={index}
                        className="cursor-pointer relative group"
                    >
                        <span className="hover:text-[var(--color-gold)] transition-colors duration-300">
                            {item}
                        </span>

                        {/* underline animation */}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-gold)] 
                             transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
            </ul>

            {/* Hamburger Button (mobile only) */}
            <button
                className="md:hidden text-[var(--color-text-primary)] text-2xl"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full 
                    bg-[var(--color-secondary-bg)] 
                    border-b border-[var(--color-border)]
                    flex flex-col items-center gap-6 py-6
                    transition-all duration-300
                    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
                {navItems.map((item, index) => (
                    <span
                        key={index}
                        className="text-[var(--color-text-primary)] text-lg cursor-pointer 
                       hover:text-[var(--color-gold)] transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </nav>
    );
};

export default Nav;