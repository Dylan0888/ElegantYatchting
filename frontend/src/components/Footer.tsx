import React from 'react'
import { MdLocalPhone, MdEmail, MdLocationPin } from "react-icons/md";
import type { IconType } from 'react-icons';


const Footer = () => {

    type footerLink = {
        label: string,
        icon?: IconType
    }

    type FooterSection = {
        title: string;
        links: footerLink[];
    }

    const footerSections: FooterSection[] = [
        {
            title: "Quick Links",
            links: [
                {label: "Home"},
                {label: "Tours"},
                {label: "Gallery"},
                {label: "About"}
            ]
        },
        {
            title: "Services",
            links: [
                {label:"Yacht Charter"},
                {label: "Bespoke Experiences"},
                {label: "Cooperate Events"},
                {label: "Yacht Management"}
            ]
        },
        {
            title: "Legal",
            links: [
                {label:"Terms of use"},
                {label: "Privacy policy"},
                {label: "Cookie policy"}
            ]
        },
        {
            title: "Contact Us",
            links: [
                {label:"+44 123 456 789", icon: MdLocalPhone},
                {label:"info@elegantyachting.com", icon: MdEmail},
                {label:"Monaco Harbour", icon: MdLocationPin}]
        }
    ]

    return (

        <footer className="footer sm:footer-horizontal bg-secondary-bg text-base-content p-10">

            {footerSections.map((section, index) => (
                <nav key={index}>
                    <h6 className="footer-title text-text-secondary">{section.title}</h6>

                    {section.links.map((link, linkIndex) => (
                        <a
                            key={linkIndex}
                            className="cursor-pointer relative group"
                        >
                            <span className="hover:text-gold transition-colors duration-150">
                                {link.icon && <link.icon className="inline mr-2" />}
                                {link.label}
                            </span>

                            {/* underline animation */}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gold 
                             transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                </nav>
            ))}

        </footer>

    )
}

export default Footer
