import React from 'react'

const Footer = () => {

    type FooterSection = {
        title: string;
        links: string[];
    }

    const footerSections: FooterSection[] = [
        {
            title: "Quick Links",
            links: ["Home ", "Tours", "Gallery", "About"]
        },
        {
            title: "Services",
            links: ["Yacht Charter", "Bespoke Experiences", "Cooperate Events", "Yacht Management"]
        },
        {
            title: "Legal",
            links: ["Terms of use", "Privacy policy", "Cookie policy"]
        },
        {
            title: "Contact Us",
            links: ["", "Privacy policy", "Cookie policy"]
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
                                {link}
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
