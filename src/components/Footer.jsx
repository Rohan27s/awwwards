import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    { href: "https://x.com/Rohan27s", Icon: FaXTwitter },
    { href: "https://www.linkedin.com/in/rohan-gotwal/", Icon: FaLinkedin },
    { href: "https://github.com/Rohan27s", Icon: FaGithub },
    { href: "mailto:rohangotwal3@gmail.com", Icon: FaEnvelope },
];

const Footer = () => (
    <footer className="w-full bg-[#5542ff] py-4 text-white">
        <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
            <p className="text-center text-sm font-light md:text-left">
                &copy; {new Date().getFullYear()} Rohan. All rights reserved.
            </p>


            {/* Social Media Links */}
            <div className="flex gap-4">
                {socialLinks.map(({ href, Icon }, index) => (
                    <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-300 hover:scale-110"
                        aria-label={href}
                    >
                        <Icon />
                    </a>
                ))}
            </div>

            <a
                href="#privacy-policy"
                className="text-center text-sm font-light hover:underline md:text-right"
            >
                Privacy Policy
            </a>
        </div>
    </footer>
);

export default Footer;
